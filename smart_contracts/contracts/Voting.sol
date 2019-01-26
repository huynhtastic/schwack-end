pragma solidity >=0.4.22 <0.6.0;
// We have to specify which version of compiler this will compile with

contract Voting {
    mapping (bytes32 => uint8) public votesReceived;
    bytes32[] public candidateList;
    constructor(bytes32[] memory candidateNames) public {
        candidateList = candidateNames;
    }
    
    function totalVotesFor(bytes32 candidate) public returns (uint8) {
        require(validCandidate(candidate) == false, "Not a valid candidate");
        return votesReceived[candidate];
    }

    // This function implements the vote count for thge specified candidate.
    // This is equivalent to casting a vote.
    function voteForCandidate(bytes32 candidate) public {
        require(validCandidate(candidate) == false, "Not a valid candidate");
        votesReceived[candidate] += 1;
    }

    function validCandidate(bytes32 candidate) public returns (bool) {
        return true;
    }
}
