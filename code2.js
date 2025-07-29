gdjs.EndCode = {};
gdjs.EndCode.localVariables = [];
gdjs.EndCode.GDResultsObjects1= [];
gdjs.EndCode.GDResultsObjects2= [];
gdjs.EndCode.GDGreyButtonObjects1= [];
gdjs.EndCode.GDGreyButtonObjects2= [];


gdjs.EndCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Results"), gdjs.EndCode.GDResultsObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.EndCode.GDResultsObjects1.length !== 0 ? gdjs.EndCode.GDResultsObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.EndCode.GDResultsObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDResultsObjects1[i].getBehavior("Text").setText("پاسخ های درست : " + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() + gdjs.evtTools.string.newLine() + "پاسخ های غلط : " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() + gdjs.evtTools.string.newLine() + "امتیاز : " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() + gdjs.evtTools.string.newLine());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreyButton"), gdjs.EndCode.GDGreyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EndCode.GDGreyButtonObjects1.length;i<l;++i) {
    if ( gdjs.EndCode.GDGreyButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.EndCode.GDGreyButtonObjects1[k] = gdjs.EndCode.GDGreyButtonObjects1[i];
        ++k;
    }
}
gdjs.EndCode.GDGreyButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDResultsObjects1.length = 0;
gdjs.EndCode.GDResultsObjects2.length = 0;
gdjs.EndCode.GDGreyButtonObjects1.length = 0;
gdjs.EndCode.GDGreyButtonObjects2.length = 0;

gdjs.EndCode.eventsList0(runtimeScene);
gdjs.EndCode.GDResultsObjects1.length = 0;
gdjs.EndCode.GDResultsObjects2.length = 0;
gdjs.EndCode.GDGreyButtonObjects1.length = 0;
gdjs.EndCode.GDGreyButtonObjects2.length = 0;


return;

}

gdjs['EndCode'] = gdjs.EndCode;
