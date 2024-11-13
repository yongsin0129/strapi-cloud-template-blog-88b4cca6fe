'use strict';

/**
 * task-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::task-type.task-type');
