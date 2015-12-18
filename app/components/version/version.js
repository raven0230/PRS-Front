'use strict';

angular.module('myApp.version', [
  'PRSFront.version.interpolate-filter',
  'PRSFront.version.version-directive'
])

.value('version', '0.1');
