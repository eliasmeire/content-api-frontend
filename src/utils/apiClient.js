import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';

const endpoint = require('../../config/api.js').endpoint;
const commonParams = {
  responseType: 'json'
};
const commonHeaders = {
  'Content-Type': 'application/json'
};

export const auth = user =>
	Observable.ajax({
    method: 'POST',
    url: `${endpoint}/auth`,
    headers: commonHeaders,
    body: user,
    ...commonParams
  });

export const getCollections = token =>
  Observable.ajax({
    url: `${endpoint}/collections`,
    headers: {
      'Authorization': `Bearer ${token}`,
      ...commonHeaders
    },
    ...commonParams
  });

export const getCollection = (token, name) =>
  Observable.ajax({
    url: `${endpoint}/collections/${name}`,
    headers: {
      'Authorization': `Bearer ${token}`,
      ...commonHeaders
    },
    ...commonParams
  });


export const getCollectionItems = (token, collName) =>
  Observable.ajax({
    url: `${endpoint}/collections/${collName}/items`,
    headers: {
      'Authorization': `Bearer ${token}`,
      ...commonHeaders
    },
    ...commonParams
  });


export const getItem = (token, collName, id) =>
  Observable.ajax({
    url: `${endpoint}/collections/${collName}/items/${id}`,
    headers: {
      'Authorization': `Bearer ${token}`,
      ...commonHeaders
    },
    ...commonParams
  });
