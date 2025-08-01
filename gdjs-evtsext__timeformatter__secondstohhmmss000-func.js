
if (typeof gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS000 !== "undefined") {
  gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS000.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS000 = {};


gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS000.userFunc0xa16db0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
var format_time = function (time_second) {
    date = new Date(null);
    date.setMilliseconds(1000*time_second);
    if (time_second >= 3600) {
        return date.toISOString().substr(11, 12); // MM:SS.000
    } else {
        return date.toISOString().substr(14, 9); // HH:MM:SS.000
    }
}

eventsFunctionContext.returnValue = format_time(eventsFunctionContext.getArgument("TimeInSeconds"));
};
gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS000.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS000.userFunc0xa16db0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS000.func = function(runtimeScene, TimeInSeconds, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TimeFormatter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TimeFormatter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "TimeInSeconds") return TimeInSeconds;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS000.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS000.registeredGdjsCallbacks = [];