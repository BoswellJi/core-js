var test = QUnit.test;

test('Reflect.getOwnMetadataKeys', function (assert) {
  var defineMetadata = Reflect.defineMetadata;
  var getOwnMetadataKeys = Reflect.getOwnMetadataKeys;
  var create = Object.create;
  assert.isFunction(getOwnMetadataKeys);
  assert.arity(getOwnMetadataKeys, 1);
  assert.name(getOwnMetadataKeys, 'getOwnMetadataKeys');
  assert.looksNative(getOwnMetadataKeys);
  assert.nonEnumerable(Reflect, 'getOwnMetadataKeys');
  assert['throws'](function () {
    getOwnMetadataKeys(undefined, undefined);
  }, TypeError);
  assert.deepEqual(getOwnMetadataKeys({}, undefined), []);
  var object = {};
  defineMetadata('key', 'value', object, undefined);
  assert.deepEqual(getOwnMetadataKeys(object, undefined), ['key']);
  var prototype = {};
  object = create(prototype);
  defineMetadata('key', 'value', prototype, undefined);
  assert.deepEqual(getOwnMetadataKeys(object, undefined), []);
  object = {};
  defineMetadata('key0', 'value', object, undefined);
  defineMetadata('key1', 'value', object, undefined);
  assert.deepEqual(getOwnMetadataKeys(object, undefined), ['key0', 'key1']);
  object = {};
  defineMetadata('key0', 'value', object, undefined);
  defineMetadata('key1', 'value', object, undefined);
  defineMetadata('key0', 'value', object, undefined);
  assert.deepEqual(getOwnMetadataKeys(object, undefined), ['key0', 'key1']);
  prototype = {};
  defineMetadata('key2', 'value', prototype, undefined);
  object = create(prototype);
  defineMetadata('key0', 'value', object, undefined);
  defineMetadata('key1', 'value', object, undefined);
  assert.deepEqual(getOwnMetadataKeys(object, undefined), ['key0', 'key1']);
  object = {};
  assert.deepEqual(getOwnMetadataKeys({}, 'name'), []);
  object = {};
  defineMetadata('key', 'value', object, 'name');
  assert.deepEqual(getOwnMetadataKeys(object, 'name'), ['key']);
  prototype = {};
  object = create(prototype);
  defineMetadata('key', 'value', prototype, 'name');
  assert.deepEqual(getOwnMetadataKeys(object, 'name'), []);
  object = {};
  defineMetadata('key0', 'value', object, 'name');
  defineMetadata('key1', 'value', object, 'name');
  defineMetadata('key0', 'value', object, 'name');
  assert.deepEqual(getOwnMetadataKeys(object, 'name'), ['key0', 'key1']);
  prototype = {};
  defineMetadata('key2', 'value', prototype, 'name');
  object = create(prototype);
  defineMetadata('key0', 'value', object, 'name');
  defineMetadata('key1', 'value', object, 'name');
  assert.deepEqual(getOwnMetadataKeys(object, 'name'), ['key0', 'key1']);
});
