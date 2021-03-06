/**
 *AgavePlatformScienceAPILib
 *
 * This file was automatically generated by APIMATIC BETA v2.0 on 10/07/2015
 */

function MetadataSchema() {
    this.created = undefined
    this.internalUsername = undefined
    this.lastUpdated = undefined
    this.owner = undefined
    this.schema = undefined
    this.uuid = undefined

}

//Make instanceof work


/**
 *A timestamp indicating when this Metadata was created in the metadata schema store.
 *
 * @return: DateTime
 */
MetadataSchema.prototype.getCreated = function () {

    return this.created;
}


MetadataSchema.prototype.setCreated = function (value) {
    this.created = value;
}


/**
 *The name of the Internal User, if any, who owns this schema.
 *
 * @return: string
 */
MetadataSchema.prototype.getInternalUsername = function () {

    return this.internalUsername;
}


MetadataSchema.prototype.setInternalUsername = function (value) {
    this.internalUsername = value;
}


/**
 *A timestamp indicating when this Metadata was last updated in the metadata schema store.
 *
 * @return: DateTime
 */
MetadataSchema.prototype.getLastUpdated = function () {

    return this.lastUpdated;
}


MetadataSchema.prototype.setLastUpdated = function (value) {
    this.lastUpdated = value;
}


/**
 *The API user who owns this Schema.
 *
 * @return: string
 */
MetadataSchema.prototype.getOwner = function () {

    return this.owner;
}


MetadataSchema.prototype.setOwner = function (value) {
    this.owner = value;
}


/**
 *A JSON Schema
 *
 * @return: string
 */
MetadataSchema.prototype.getSchema = function () {

    return this.schema;
}


MetadataSchema.prototype.setSchema = function (value) {
    this.schema = value;
}


/**
 *The UUID for this Schema.
 *
 * @return: string
 */
MetadataSchema.prototype.getUuid = function () {

    return this.uuid;
}


MetadataSchema.prototype.setUuid = function (value) {
    this.uuid = value;
}
     





