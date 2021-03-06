/**
 *AgavePlatformScienceAPILib
 *
 * This file was automatically generated by APIMATIC BETA v2.0 on 10/07/2015
 */

function FileCopyAction() {
    this.action = "COPY";
    this.append = false;
}

//Make instanceof work
FileCopyAction.prototype = new FileAction();

FileCopyAction.prototype.constructor = FileCopyAction;



/**
 *New name of the file or folder specified in the URL.
 *
 * @return: string
 */
    FileAction.prototype.getPath = function () {

    return this.path;
}


FileAction.prototype.setPath = function (value) {
    this.path = value;
}

/**
 * True if the contents of the source file should be appended to the end of file given in the URL.
 *
 * @return: string
 */
FileCopyAction.prototype.isAppend = function () {

    return this.append;
}


FileCopyAction.prototype.setAppend = function (append) {
    this.append = append;
}
     





