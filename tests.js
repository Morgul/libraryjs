//----------------------------------------------------------------------------------------------------------------------
// Node.js Unit Tests
//----------------------------------------------------------------------------------------------------------------------

var assert = require('assert');
var library = require('./library');

//----------------------------------------------------------------------------------------------------------------------
// Dict tests
//----------------------------------------------------------------------------------------------------------------------

var testDict = new library.dict();
testDict['foo'] = 'bar';

// Basic test
assert.equal(testDict['foo'], 'bar');

// Basic get test
assert.equal(testDict.get('foo'), 'bar');

// Do we return the default value?
assert.equal(testDict.get('bleh', 'bar'), 'bar');

// What if we don't pass one in?
assert.equal(testDict.get('apples'), null);

// No params at all
assert.equal(testDict.get(), null);

// Basic hasKey test
assert.ok(testDict.hasKey('foo'));

// Do we return false if
assert.ifError(testDict.hasKey('apples'));

// Test our constructor
var testDict2 = new library.dict({'foo': "bar", 'apples': 23});
assert.equal(testDict2['foo'], 'bar');
assert.equal(testDict2['apples'], 23);

//----------------------------------------------------------------------------------------------------------------------
// List tests
//----------------------------------------------------------------------------------------------------------------------

var testList = new library.list();
testList.append('foo');
testList.append('bar');
testList.append(23);

// Basic test
assert.equal(testList[0], 'foo');

// Insert test
testList.insert(1, 'apples');
assert.equal(testList[1], 'apples');

// Index test
assert.equal(testList.index('apples'), 1);

// Remove test
testList.remove('apples');
assert.equal(testList.index('apples'), -1);

// RemoveAt test
testList.removeAt(1);
assert.equal(testList.index('bar'), -1);

// Contains test
assert.ok(testList.contains('foo'));
assert.ifError(testList.contains('dog'));

// Each test
var testList2 = new library.list();
testList.each(function(idx, item)
{
    testList2.append(item);
});

assert.notStrictEqual(testList, testList2);

//----------------------------------------------------------------------------------------------------------------------

