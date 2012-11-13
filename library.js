//----------------------------------------------------------------------------------------------------------------------
// Library JS - A collection of useful library functions, which can be used either as and AMD module, or a node.js
// package. For the most part, this module is attempting to bring a bit of sanity to javascript, and round off some of
// the sharp corners developers typically impale themselves on.
//
// Version 0.1.0
//----------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------
// A Dictionary object, modeled off of Python's
//----------------------------------------------------------------------------------------------------------------------

function Dict (obj)
{
    for (var key in obj)
    {
        if (obj.hasOwnProperty(key))
        {
            this[key] = obj[key];
        } // end if
    } // end for
} // end dict constructor

Dict.prototype.hasKey = function(key)
{
    // For now, we just do this
    return this.hasOwnProperty(key);
}; // end hasKey

Dict.prototype.get = function(key, defaultValue)
{
    // Make sure we have a key to look up
    if (key != undefined)
    {
        // Check to see if we have this key
        if (this.hasKey(key))
        {
            return this[key];
        } // end if
    } // end if

    // Otherwise, check to see if we have a default value
    if (defaultValue != undefined)
    {
        return defaultValue;
    } // end if

    // Finally, just return null, our default defaultValue
    return null;
}; // end get

//----------------------------------------------------------------------------------------------------------------------
// A Dictionary object, modeled off of Python's
//----------------------------------------------------------------------------------------------------------------------

function List (array)
{
    if (array != undefined)
    {
        for(var idx = 0; i < array.length; i++)
        {
            this[idx] = array[idx];
        } // end for
    } // end if
} // end List constructor

List.prototype = Array.prototype;

List.index = function(elem)
{
    if (this.indexOf)
    {
        return this.indexOf(elem);
    } // end if

    for (var i = 0, length = this.length; i < length; i++)
    {
        if (this[i] === elem)
        {
            return i;
        } // end if
    } // end for

    return -1;
}; // end index

List.prototype.append = function(item)
{
    this.push(item);
}; // end add

List.prototype.insert = function(index, item)
{
    this.splice(index, 0, item);
}; // end insert

List.prototype.remove = function(item)
{
    var idx = this.index(item);

    if (idx >= 0)
    {
        this.removeAt(idx);
    } // end if
}; // end remove

List.prototype.removeAt = function(index)
{
    this.splice(index, 1);
}; // end remove

List.prototype.contains = function(item)
{
    var idx = this.index(item);

    if (idx >= 0)
    {
        return true;
    } // end if

    return false;
}; // end contains

List.prototype.each = function(callback)
{
    for ( ; i < this.length; )
    {
        if (callback.call(this[i], i, this[i++ ]) === false)
        {
            break;
        } // end if
    } // end for
}; // end each

//----------------------------------------------------------------------------------------------------------------------
// Support both AMD and node, through amdefine.
//----------------------------------------------------------------------------------------------------------------------

if (typeof define !== 'function')
{
    var define = require('amdefine')(module);
} // end amdefine support

//----------------------------------------------------------------------------------------------------------------------
// AMD Module Define
//----------------------------------------------------------------------------------------------------------------------

define(function(require)
{
    return {
        'dict': Dict,
        'list': List
    };
});

//----------------------------------------------------------------------------------------------------------------------

