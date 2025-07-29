gdjs.StartCode = {};
gdjs.StartCode.localVariables = [];
gdjs.StartCode.GDGreyButtonObjects1= [];
gdjs.StartCode.GDGreyButtonObjects2= [];


gdjs.StartCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GreyButton"), gdjs.StartCode.GDGreyButtonObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.StartCode.GDGreyButtonObjects1.length !== 0 ? gdjs.StartCode.GDGreyButtonObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreyButton"), gdjs.StartCode.GDGreyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDGreyButtonObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDGreyButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDGreyButtonObjects1[k] = gdjs.StartCode.GDGreyButtonObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDGreyButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDGreyButtonObjects1.length = 0;
gdjs.StartCode.GDGreyButtonObjects2.length = 0;

gdjs.StartCode.eventsList0(runtimeScene);
gdjs.StartCode.GDGreyButtonObjects1.length = 0;
gdjs.StartCode.GDGreyButtonObjects2.length = 0;


return;

}

gdjs['StartCode'] = gdjs.StartCode;
