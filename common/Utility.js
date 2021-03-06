define(['underscore'], function (_) {
  _.mixin({
    whatsChanged: function(oldValues,newValues) {
      var returnObj = {};
      _.each(oldValues,function(oldValue,key){
        if(newValues[key] != oldValue) returnObj[key] = newValues[key];
      })

      return returnObj;
    },
    total: function(values) {
      if (_.isEmpty(values)) return 0;
    	return _.reduce(values,function(memo,num){return memo+num})
    }
  })
});