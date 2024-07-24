# screenee.check[].state

State        |  Description
-------------|------------------------------------------
`new`        |  Check is new and untouched. This is the initial state.
`seen`       |  Check has been opened / seen by the screenee but no progress was made. The screenee at least read the introduction of the check.
`progress`   |  Check is in progress. The screenee entered information or uploaded a document.
`removed`    |  The screenee removed all check information. Usually this means the screenee wants to redo the check.
`evaluation` |  The screenee completed the check to their best ability, but the information could not be validated. This usually happens when the screenee uploads a picture of a document.
`fail`       |  End state. The check failed. Usually this means the screenee was unable to complete the check, or some technical difficulty arose. This usually does not happen (if ever) as checks are usually designed to deal with any type of situation.
`success`    |  End state. The check was successfully performed. This does not reflect the state of the data. For example, an ID check could be successfully performed, and the outcome is that the passport used has expired and is therefore invalid.
