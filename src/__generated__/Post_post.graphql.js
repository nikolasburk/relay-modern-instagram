/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule Post_post.graphql
 * @generated SignedSource<<2f248a04ff28338d917bbddba05af87c>>
 * @flow
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Post_post = {|
  +id: string;
  +description: string;
  +imageUrl: string;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Post_post",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "id",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "description",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "imageUrl",
      "storageKey": null
    }
  ],
  "type": "Post"
};

module.exports = fragment;
