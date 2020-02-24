import axios from 'axios';
import { sortByObjKey } from './helpers'

const baseURL = 'https://swapi.co/api/'

const swapi = axios.create({
  baseURL,
  tmeout: 1000,
})

export const handleBaseGet = async (topic, topicKey, commit, keyToSort, fetchAll = false) => {
  try {
    const response = await swapi.get(topic)
    const { data } = response
    let topicData = data.results
    if (fetchAll) {
      const remainingPages = Math.ceil((data.count - 1) / 10);
      let promises = [];
      for (let i = 2; i <= remainingPages; i++) {
        promises.push(swapi.get(`${topic}?page=${i}`))
      }
      let additionalData = await Promise.all(promises);
      topicData = additionalData.reduce((acc, data) => [...acc, ...data.data.results], topicData);
    }

    topicData = sortByObjKey(
      topicData,
      keyToSort,
      keyToSort === 'url' ? (urlStr) => {
        let splitOn = urlStr.split('/');
        return parseInt(splitOn[splitOn.length - 2])
      } : null)
    commit(`SAVE_${topic.toUpperCase()}`, topicData);
    const dataKeys = Object.keys(data.results[0])
    commit(`SAVE_${topicKey.toUpperCase()}_KEYS`, dataKeys)
  } catch (error) {
    throw new Error(`API ${error}`);
  }
}