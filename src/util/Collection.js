'use strict';

const BaseCollection = require('@discordjs/collection');
const Util = require('./Util');

class Collection extends BaseCollection {
  toJSON() {
    
    return this.map(e => {
        if(e){
          return typeof e.toJSON === 'function' ? e.toJSON() : Util.flatten(e);
        }else{
          return Util.flatten(e);
        }
    });
  }
}

module.exports = Collection;

/**
 * @external Collection
 * @see {@link https://discord.js.org/#/docs/collection/master/class/Collection}
 */
