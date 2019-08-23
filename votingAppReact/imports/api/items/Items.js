// definition of the Items collection

import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import SimpleSchema from 'simpl-schema'

const Items = new Mongo.Collection('items');

const ItemSchema = new SimpleSchema({
    text: String,
    value: SimpleSchema.Integer,
});

const ItemsSchema = new SimpleSchema({
    itemOne: ItemSchema,
    itemTwo: ItemSchema,
    lastUpdated:{
        type: Date,
        optional: true
    }
});

Items.attachSchema(ItemsSchema);

export default Items;
