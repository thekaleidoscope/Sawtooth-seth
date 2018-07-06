pragma solidity ^0.4.10;

contract test
{
  string name;
  function setName(string _name)
  {
    name = _name;
  }
  function getName() constant returns(string)
  {
    return(name);
  }
}
