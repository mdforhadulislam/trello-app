const bcrypt = require("bcrypt");
const curd = require("../lib/curdOparations");

class Utilites {
   constructor() {}

   /**
    * @param {Array<object>} array
    * @param {String} filterPropartis
    * @param {String} filterData
    * @returns {Array<object>}Array
    */
   filter(array, filterPropartis, filterData) {
      const filteringData = array.filter(
         (data) => data[filterPropartis] === filterData
      );
      return filteringData;
   }

   /**
    * @param {Array<object>} array
    * @param {String} filterPropartis
    * @param {String} filterData
    * @returns {Array<object>}Array
    */
   deleteFiltering(array, filterPropartis, filterData) {
      const filteringData = array.filter(
         (data) => data[filterPropartis] !== filterData
      );
      return filteringData;
   }

   /**
    *
    * @param {Array<string>} array
    * @param {string} filterData
    * @returns {Array<string>}Array
    */
   singlePropartisFiltering(array, filterData) {
      const filteringData = array.filter((data) => data === filterData);
      return filteringData;
   }

   /**
    *
    * @param {Array<string>} array
    * @param {string} filterData
    * @returns {Array<string>}Array
    */
   deleteSinglePropartisFiltering(array, filterData) {
      const filteringData = array.filter((data) => data !== filterData);
      return filteringData;
   }

   /**
    *
    * @param {Array<object>} array
    * @param {string} filterPropartis
    * @param {string} filterData
    * @returns {object}object
    */
   find(array, findPropartis, filterData) {
      const findingData = array.find(
         (data) => data[findPropartis] === filterData
      );
      return findingData;
   }

   /**
    *
    * @param {string} string
    * @returns {string}string
    */
   convartHash(string) {
      const hashData = bcrypt.hashSync(string, 5);
      return hashData;
   }

   /**
    *
    * @param {string} string
    * @param {string} hashString
    * @returns {string} string
    */
   compeaData(string, hashString) {
      const value = bcrypt.compareSync(string, hashString);
      return value;
   }

   /**
    *
    * @param {string} id
    * @returns {string}string
    */
   tokenGenaretor(id) {
      let length = 15;
      if (length) {
         const possiblecharacters = "abcdefghijklmnopqrstuvwxyz1234567890";
         let output = "";
         for (let i = 1; i <= length; i += 1) {
            const randomCharacter = possiblecharacters.charAt(
               Math.floor(Math.random() * possiblecharacters.length)
            );
            output += randomCharacter;
         }
         curd.create("tokens", { id: id, token: output }, (err, data) => {
            if (err) {
               return output;
            }
         });
         return output;
      }
      return false;
   }

   /**
    *
    * @param {string} id
    * @param {Function} callback
    */
   tokenVerify(id, callback) {
      curd.read("token", (err, data) => {
         if (err) {
            const datas = this.jsonParse(data);
            const token = datas.find((sToken) => sToken.id === id);
            const isToken = token ? token : false;
            callback(isToken);
         } else {
            callback(false);
         }
      });
   }

   /**
    *
    * @param {string} id
    * @param {Function} callback
    */
   tokenDestroy(id, callback) {
      curd.delete("token", id, (err, data) => {
         if (err) {
            callback(data);
         } else {
            callback(false);
         }
      });
   }

   /**
    *
    * @param {any} data
    * @returns {string}string
    */
   jsonStringify(data) {
      return JSON.stringify(data);
   }

   /**
    *
    * @param {string} data
    * @returns {any}any
    */
   jsonParse(data) {
      return JSON.parse(data);
   }
}

const {
   filter,
   find,
   convartHash,
   compeaData,
   tokenGenaretor,
   tokenDestroy,
   tokenVerify,
   jsonStringify,
   jsonParse,
} = new Utilites();

module.exports = {
   filter,
   find,
   convartHash,
   compeaData,
   tokenGenaretor,
   tokenDestroy,
   tokenVerify,
   jsonStringify,
   jsonParse,
};
