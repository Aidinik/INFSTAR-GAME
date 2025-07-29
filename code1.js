gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.forEachIndex2 = 0;

gdjs.GameCode.forEachObjects2 = [];

gdjs.GameCode.forEachTemporary2 = null;

gdjs.GameCode.forEachTotalCount2 = 0;

gdjs.GameCode.GDBackdropObjects1= [];
gdjs.GameCode.GDBackdropObjects2= [];
gdjs.GameCode.GDBackdropObjects3= [];
gdjs.GameCode.GDBackdropObjects4= [];
gdjs.GameCode.GDButtonCorrectObjects1= [];
gdjs.GameCode.GDButtonCorrectObjects2= [];
gdjs.GameCode.GDButtonCorrectObjects3= [];
gdjs.GameCode.GDButtonCorrectObjects4= [];
gdjs.GameCode.GDButtonWrongObjects1= [];
gdjs.GameCode.GDButtonWrongObjects2= [];
gdjs.GameCode.GDButtonWrongObjects3= [];
gdjs.GameCode.GDButtonWrongObjects4= [];
gdjs.GameCode.GDQuestionObjects1= [];
gdjs.GameCode.GDQuestionObjects2= [];
gdjs.GameCode.GDQuestionObjects3= [];
gdjs.GameCode.GDQuestionObjects4= [];
gdjs.GameCode.GDHealthTextObjects1= [];
gdjs.GameCode.GDHealthTextObjects2= [];
gdjs.GameCode.GDHealthTextObjects3= [];
gdjs.GameCode.GDHealthTextObjects4= [];
gdjs.GameCode.GDTimerTextObjects1= [];
gdjs.GameCode.GDTimerTextObjects2= [];
gdjs.GameCode.GDTimerTextObjects3= [];
gdjs.GameCode.GDTimerTextObjects4= [];
gdjs.GameCode.GDScoreTextObjects1= [];
gdjs.GameCode.GDScoreTextObjects2= [];
gdjs.GameCode.GDScoreTextObjects3= [];
gdjs.GameCode.GDScoreTextObjects4= [];
gdjs.GameCode.GDAlienObjects1= [];
gdjs.GameCode.GDAlienObjects2= [];
gdjs.GameCode.GDAlienObjects3= [];
gdjs.GameCode.GDAlienObjects4= [];
gdjs.GameCode.GDCursorObjects1= [];
gdjs.GameCode.GDCursorObjects2= [];
gdjs.GameCode.GDCursorObjects3= [];
gdjs.GameCode.GDCursorObjects4= [];
gdjs.GameCode.GDExplosionObjects1= [];
gdjs.GameCode.GDExplosionObjects2= [];
gdjs.GameCode.GDExplosionObjects3= [];
gdjs.GameCode.GDExplosionObjects4= [];
gdjs.GameCode.GDRadarObjects1= [];
gdjs.GameCode.GDRadarObjects2= [];
gdjs.GameCode.GDRadarObjects3= [];
gdjs.GameCode.GDRadarObjects4= [];
gdjs.GameCode.GDRadarHandleObjects1= [];
gdjs.GameCode.GDRadarHandleObjects2= [];
gdjs.GameCode.GDRadarHandleObjects3= [];
gdjs.GameCode.GDRadarHandleObjects4= [];
gdjs.GameCode.GDRadarBeepObjects1= [];
gdjs.GameCode.GDRadarBeepObjects2= [];
gdjs.GameCode.GDRadarBeepObjects3= [];
gdjs.GameCode.GDRadarBeepObjects4= [];
gdjs.GameCode.GDHealth2Objects1= [];
gdjs.GameCode.GDHealth2Objects2= [];
gdjs.GameCode.GDHealth2Objects3= [];
gdjs.GameCode.GDHealth2Objects4= [];
gdjs.GameCode.GDScoreCorrectObjects1= [];
gdjs.GameCode.GDScoreCorrectObjects2= [];
gdjs.GameCode.GDScoreCorrectObjects3= [];
gdjs.GameCode.GDScoreCorrectObjects4= [];
gdjs.GameCode.GDTimerIconObjects1= [];
gdjs.GameCode.GDTimerIconObjects2= [];
gdjs.GameCode.GDTimerIconObjects3= [];
gdjs.GameCode.GDTimerIconObjects4= [];
gdjs.GameCode.GDLaserRedObjects1= [];
gdjs.GameCode.GDLaserRedObjects2= [];
gdjs.GameCode.GDLaserRedObjects3= [];
gdjs.GameCode.GDLaserRedObjects4= [];
gdjs.GameCode.GDDeskObjects1= [];
gdjs.GameCode.GDDeskObjects2= [];
gdjs.GameCode.GDDeskObjects3= [];
gdjs.GameCode.GDDeskObjects4= [];
gdjs.GameCode.GDLaserGreenObjects1= [];
gdjs.GameCode.GDLaserGreenObjects2= [];
gdjs.GameCode.GDLaserGreenObjects3= [];
gdjs.GameCode.GDLaserGreenObjects4= [];
gdjs.GameCode.GDHealthMonitorObjects1= [];
gdjs.GameCode.GDHealthMonitorObjects2= [];
gdjs.GameCode.GDHealthMonitorObjects3= [];
gdjs.GameCode.GDHealthMonitorObjects4= [];
gdjs.GameCode.GDScoreWrongObjects1= [];
gdjs.GameCode.GDScoreWrongObjects2= [];
gdjs.GameCode.GDScoreWrongObjects3= [];
gdjs.GameCode.GDScoreWrongObjects4= [];


gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRadarHandleObjects1Objects = Hashtable.newFrom({"RadarHandle": gdjs.GameCode.GDRadarHandleObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRadarBeepObjects1Objects = Hashtable.newFrom({"RadarBeep": gdjs.GameCode.GDRadarBeepObjects1});
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13068484);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Radar.mp3", false, 12, 1);
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRadarHandleObjects1Objects = Hashtable.newFrom({"RadarHandle": gdjs.GameCode.GDRadarHandleObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRadarBeepObjects1Objects = Hashtable.newFrom({"RadarBeep": gdjs.GameCode.GDRadarBeepObjects1});
gdjs.GameCode.eventsList1 = function(runtimeScene) {

};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13074012);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "eklee-KeyPressMac04.wav", false, 50, 1);
}}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13076244);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "eklee-KeyPressMac04.wav", false, 50, 1);
}}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonCorrect"), gdjs.GameCode.GDButtonCorrectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonCorrectObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDButtonCorrectObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonCorrectObjects2[k] = gdjs.GameCode.GDButtonCorrectObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonCorrectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDButtonCorrectObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDButtonCorrectObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDButtonCorrectObjects2[i].getBehavior("Animation").setAnimationName("Normal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonCorrect"), gdjs.GameCode.GDButtonCorrectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonCorrectObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonCorrectObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonCorrectObjects2[k] = gdjs.GameCode.GDButtonCorrectObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonCorrectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDButtonCorrectObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDButtonCorrectObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDButtonCorrectObjects2[i].getBehavior("Animation").setAnimationName("Pressed");
}
}
{ //Subevents
gdjs.GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonWrong"), gdjs.GameCode.GDButtonWrongObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonWrongObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDButtonWrongObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonWrongObjects2[k] = gdjs.GameCode.GDButtonWrongObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonWrongObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDButtonWrongObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDButtonWrongObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDButtonWrongObjects2[i].getBehavior("Animation").setAnimationName("Normal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonWrong"), gdjs.GameCode.GDButtonWrongObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonWrongObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonWrongObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonWrongObjects1[k] = gdjs.GameCode.GDButtonWrongObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonWrongObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDButtonWrongObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDButtonWrongObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDButtonWrongObjects1[i].getBehavior("Animation").setAnimationName("Pressed");
}
}
{ //Subevents
gdjs.GameCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0)) > 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Question"), gdjs.GameCode.GDQuestionObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(true);
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(gdjs.randomInRange(1, gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0))) - 1);
}{for(var i = 0, len = gdjs.GameCode.GDQuestionObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDQuestionObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End", false);
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDExplosionObjects4Objects = Hashtable.newFrom({"Explosion": gdjs.GameCode.GDExplosionObjects4});
gdjs.GameCode.eventsList6 = function(runtimeScene) {

};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{



}


{


const repeatCount4 = 5;
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.copyArray(gdjs.GameCode.GDAlienObjects3, gdjs.GameCode.GDAlienObjects4);

gdjs.GameCode.GDExplosionObjects4.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDExplosionObjects4Objects, (( gdjs.GameCode.GDAlienObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDAlienObjects4[0].getCenterXInScene()) + gdjs.randomInRange(-((( gdjs.GameCode.GDAlienObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDAlienObjects4[0].getBehavior("Scale").getScale())) * 200, (( gdjs.GameCode.GDAlienObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDAlienObjects4[0].getBehavior("Scale").getScale()) * 200), (( gdjs.GameCode.GDAlienObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDAlienObjects4[0].getCenterYInScene()) + gdjs.randomInRange(-((( gdjs.GameCode.GDAlienObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDAlienObjects4[0].getBehavior("Scale").getScale())) * 200, (( gdjs.GameCode.GDAlienObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDAlienObjects4[0].getBehavior("Scale").getScale()) * 200), "");
}{for(var i = 0, len = gdjs.GameCode.GDExplosionObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDExplosionObjects4[i].getBehavior("Scale").setScale(0.001);
}
}{for(var i = 0, len = gdjs.GameCode.GDExplosionObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDExplosionObjects4[i].setAngle(gdjs.randomInRange(0, 360));
}
}{for(var i = 0, len = gdjs.GameCode.GDExplosionObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDExplosionObjects4[i].getBehavior("Tween").addObjectScaleTween3("boom", (( gdjs.GameCode.GDAlienObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDAlienObjects4[0].getBehavior("Scale").getScale()) * 2 / 10, "easeInOutBack", 0.5 + gdjs.randomFloatInRange(0.25, 0.5), true, true);
}
}{for(var i = 0, len = gdjs.GameCode.GDExplosionObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDExplosionObjects4[i].setZOrder((( gdjs.GameCode.GDAlienObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDAlienObjects4[0].getZOrder()) + 1);
}
}}
}

}


};gdjs.GameCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()).getAsString()).includes("."));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Alien"), gdjs.GameCode.GDAlienObjects3);
gdjs.copyArray(runtimeScene.getObjects("ScoreCorrect"), gdjs.GameCode.GDScoreCorrectObjects3);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{for(var i = 0, len = gdjs.GameCode.GDAlienObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDAlienObjects3[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(1, 10, 10, 10, 10, 0.05, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDScoreCorrectObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDScoreCorrectObjects3[i].getBehavior("FlashOpacity").Flash("Tween", 1, 0.79 * 255, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "point.wav", false, 50, 0.1);
}
{ //Subevents
gdjs.GameCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !((runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()).getAsString()).includes("."));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Health2"), gdjs.GameCode.GDHealth2Objects3);
gdjs.copyArray(runtimeScene.getObjects("ScoreWrong"), gdjs.GameCode.GDScoreWrongObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(1).sub(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).sub(5);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 2, 0, 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.sound.playSound(runtimeScene, "Explosion.wav", false, 50, 0.1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "alarm.ogg", false, 12, 0.1);
}{for(var i = 0, len = gdjs.GameCode.GDHealth2Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDHealth2Objects3[i].getBehavior("FlashOpacity").Flash("Tween", 1, 0.79 * 255, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDScoreWrongObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDScoreWrongObjects3[i].getBehavior("FlashOpacity").Flash("Tween", 1, 0.79 * 255, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.variableRemoveAt(runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber());
}{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(false);
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDExplosionObjects3Objects = Hashtable.newFrom({"Explosion": gdjs.GameCode.GDExplosionObjects3});
gdjs.GameCode.eventsList9 = function(runtimeScene) {

};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{



}


{


const repeatCount3 = 5;
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.copyArray(gdjs.GameCode.GDAlienObjects2, gdjs.GameCode.GDAlienObjects3);

gdjs.GameCode.GDExplosionObjects3.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDExplosionObjects3Objects, (( gdjs.GameCode.GDAlienObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDAlienObjects3[0].getCenterXInScene()) + gdjs.randomInRange(-((( gdjs.GameCode.GDAlienObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDAlienObjects3[0].getBehavior("Scale").getScale())) * 200, (( gdjs.GameCode.GDAlienObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDAlienObjects3[0].getBehavior("Scale").getScale()) * 200), (( gdjs.GameCode.GDAlienObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDAlienObjects3[0].getCenterYInScene()) + gdjs.randomInRange(-((( gdjs.GameCode.GDAlienObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDAlienObjects3[0].getBehavior("Scale").getScale())) * 200, (( gdjs.GameCode.GDAlienObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDAlienObjects3[0].getBehavior("Scale").getScale()) * 200), "");
}{for(var i = 0, len = gdjs.GameCode.GDExplosionObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDExplosionObjects3[i].getBehavior("Scale").setScale(0.001);
}
}{for(var i = 0, len = gdjs.GameCode.GDExplosionObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDExplosionObjects3[i].setAngle(gdjs.randomInRange(0, 360));
}
}{for(var i = 0, len = gdjs.GameCode.GDExplosionObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDExplosionObjects3[i].getBehavior("Tween").addObjectScaleTween3("boom", (( gdjs.GameCode.GDAlienObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDAlienObjects3[0].getBehavior("Scale").getScale()) * 2 / 10, "easeInOutBack", 0.5 + gdjs.randomFloatInRange(0.25, 0.5), true, true);
}
}{for(var i = 0, len = gdjs.GameCode.GDExplosionObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDExplosionObjects3[i].setZOrder((( gdjs.GameCode.GDAlienObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDAlienObjects3[0].getZOrder()) + 1);
}
}}
}

}


};gdjs.GameCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()).getAsString()).includes("."));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Health2"), gdjs.GameCode.GDHealth2Objects2);
gdjs.copyArray(runtimeScene.getObjects("ScoreWrong"), gdjs.GameCode.GDScoreWrongObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).sub(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).sub(5);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0.05, 0.05, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.sound.playSound(runtimeScene, "Explosion.wav", false, 50, 0.1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "alarm.ogg", false, 12, 0.1);
}{for(var i = 0, len = gdjs.GameCode.GDHealth2Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDHealth2Objects2[i].getBehavior("FlashOpacity").Flash("Tween", 1, 0.79 * 255, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDScoreWrongObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreWrongObjects2[i].getBehavior("FlashOpacity").Flash("Tween", 1, 0.79 * 255, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !((runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()).getAsString()).includes("."));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Alien"), gdjs.GameCode.GDAlienObjects2);
gdjs.copyArray(runtimeScene.getObjects("ScoreCorrect"), gdjs.GameCode.GDScoreCorrectObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{for(var i = 0, len = gdjs.GameCode.GDAlienObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDAlienObjects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(1, 10, 10, 10, 10, 0.05, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDScoreCorrectObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreCorrectObjects2[i].getBehavior("FlashOpacity").Flash("Tween", 1, 0.79 * 255, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "point.wav", false, 50, 0.1);
}
{ //Subevents
gdjs.GameCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.variableRemoveAt(runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber());
}{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(false);
}}

}


};gdjs.GameCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonCorrect"), gdjs.GameCode.GDButtonCorrectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonCorrectObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonCorrectObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonCorrectObjects2[k] = gdjs.GameCode.GDButtonCorrectObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonCorrectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13080788);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LaserGreen"), gdjs.GameCode.GDLaserGreenObjects2);
{for(var i = 0, len = gdjs.GameCode.GDLaserGreenObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDLaserGreenObjects2[i].getBehavior("FlashOpacity").Flash("Tween", 0.2, 255, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "laser.ogg", false, 12, gdjs.randomFloatInRange(0.9, 1.1));
}
{ //Subevents
gdjs.GameCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonWrong"), gdjs.GameCode.GDButtonWrongObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonWrongObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonWrongObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonWrongObjects1[k] = gdjs.GameCode.GDButtonWrongObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonWrongObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13087260);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LaserRed"), gdjs.GameCode.GDLaserRedObjects1);
{for(var i = 0, len = gdjs.GameCode.GDLaserRedObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLaserRedObjects1[i].getBehavior("FlashOpacity").Flash("Tween", 0.2, 255, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "laser.ogg", false, 12, gdjs.randomFloatInRange(0.9, 1.1));
}
{ //Subevents
gdjs.GameCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Alien"), gdjs.GameCode.GDAlienObjects1);
gdjs.copyArray(runtimeScene.getObjects("RadarBeep"), gdjs.GameCode.GDRadarBeepObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "time");
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.GameCode.GDAlienObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAlienObjects1[i].getBehavior("Tween").addObjectScaleTween3("sdasfa", 1, "linear", 120, false, true);
}
}{for(var i = 0, len = gdjs.GameCode.GDRadarBeepObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRadarBeepObjects1[i].getBehavior("Tween").addObjectPositionYTween2("wecwds", 593, "linear", 120, false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Engine.wav", true, 5, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Alien"), gdjs.GameCode.GDAlienObjects1);
gdjs.copyArray(runtimeScene.getObjects("Backdrop"), gdjs.GameCode.GDBackdropObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.GameCode.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("HealthMonitor"), gdjs.GameCode.GDHealthMonitorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Radar"), gdjs.GameCode.GDRadarObjects1);
gdjs.copyArray(runtimeScene.getObjects("RadarHandle"), gdjs.GameCode.GDRadarHandleObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TimerText"), gdjs.GameCode.GDTimerTextObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameCode.GDBackdropObjects1.length !== 0 ? gdjs.GameCode.GDBackdropObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.GameCode.GDTimerTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTimerTextObjects1[i].getBehavior("Text").setText(gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS.func(runtimeScene, Math.round(120 - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "time")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects1[i].getBehavior("Text").setText("امتیاز : " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.GameCode.GDAlienObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAlienObjects1[i].setPosition(gdjs.GameCode.GDAlienObjects1[i].getX() +(Math.sin((gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) - 4) * 5) / 2),gdjs.GameCode.GDAlienObjects1[i].getY() +(Math.cos((gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) + 10) * 5) / 2));
}
}{for(var i = 0, len = gdjs.GameCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCursorObjects1[i].addForceTowardObject((gdjs.GameCode.GDAlienObjects1.length !== 0 ? gdjs.GameCode.GDAlienObjects1[0] : null), 25, 1);
}
}{for(var i = 0, len = gdjs.GameCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCursorObjects1[i].addForceTowardPosition((( gdjs.GameCode.GDAlienObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDAlienObjects1[0].getCenterXInScene()) + gdjs.randomInRange(-(200), 200), (( gdjs.GameCode.GDAlienObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDAlienObjects1[0].getCenterYInScene()) + gdjs.randomInRange(-(200), 200), 2, 1);
}
}{for(var i = 0, len = gdjs.GameCode.GDRadarHandleObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRadarHandleObjects1[i].putAroundObject((gdjs.GameCode.GDRadarObjects1.length !== 0 ? gdjs.GameCode.GDRadarObjects1[0] : null), 0, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDRadarHandleObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRadarHandleObjects1[i].setAngle(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 180);
}
}{for(var i = 0, len = gdjs.GameCode.GDHealthMonitorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHealthMonitorObjects1[i].getBehavior("Animation").setAnimationName(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RadarBeep"), gdjs.GameCode.GDRadarBeepObjects1);
gdjs.copyArray(runtimeScene.getObjects("RadarHandle"), gdjs.GameCode.GDRadarHandleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRadarHandleObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRadarBeepObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDRadarBeepObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDRadarBeepObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRadarBeepObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RadarBeep"), gdjs.GameCode.GDRadarBeepObjects1);
gdjs.copyArray(runtimeScene.getObjects("RadarHandle"), gdjs.GameCode.GDRadarHandleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRadarHandleObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRadarBeepObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13069300);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDRadarBeepObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDRadarBeepObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRadarBeepObjects1[i].getBehavior("Tween").addObjectOpacityTween2("show", 0, "linear", 1, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "time") >= 120;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Explosion"), gdjs.GameCode.GDExplosionObjects1);

for (gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.GDExplosionObjects1.length;++gdjs.GameCode.forEachIndex2) {
gdjs.GameCode.GDExplosionObjects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDExplosionObjects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDExplosionObjects2.push(gdjs.GameCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDExplosionObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDExplosionObjects2[i].getBehavior("Tween").getProgress("boom") > 0.9 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDExplosionObjects2[k] = gdjs.GameCode.GDExplosionObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDExplosionObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13071300);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Explosion.wav", false, 50, gdjs.randomFloatInRange(0.9, 1.1));
}}
}

}


{


gdjs.GameCode.eventsList4(runtimeScene);
}


{


gdjs.GameCode.eventsList13(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDBackdropObjects1.length = 0;
gdjs.GameCode.GDBackdropObjects2.length = 0;
gdjs.GameCode.GDBackdropObjects3.length = 0;
gdjs.GameCode.GDBackdropObjects4.length = 0;
gdjs.GameCode.GDButtonCorrectObjects1.length = 0;
gdjs.GameCode.GDButtonCorrectObjects2.length = 0;
gdjs.GameCode.GDButtonCorrectObjects3.length = 0;
gdjs.GameCode.GDButtonCorrectObjects4.length = 0;
gdjs.GameCode.GDButtonWrongObjects1.length = 0;
gdjs.GameCode.GDButtonWrongObjects2.length = 0;
gdjs.GameCode.GDButtonWrongObjects3.length = 0;
gdjs.GameCode.GDButtonWrongObjects4.length = 0;
gdjs.GameCode.GDQuestionObjects1.length = 0;
gdjs.GameCode.GDQuestionObjects2.length = 0;
gdjs.GameCode.GDQuestionObjects3.length = 0;
gdjs.GameCode.GDQuestionObjects4.length = 0;
gdjs.GameCode.GDHealthTextObjects1.length = 0;
gdjs.GameCode.GDHealthTextObjects2.length = 0;
gdjs.GameCode.GDHealthTextObjects3.length = 0;
gdjs.GameCode.GDHealthTextObjects4.length = 0;
gdjs.GameCode.GDTimerTextObjects1.length = 0;
gdjs.GameCode.GDTimerTextObjects2.length = 0;
gdjs.GameCode.GDTimerTextObjects3.length = 0;
gdjs.GameCode.GDTimerTextObjects4.length = 0;
gdjs.GameCode.GDScoreTextObjects1.length = 0;
gdjs.GameCode.GDScoreTextObjects2.length = 0;
gdjs.GameCode.GDScoreTextObjects3.length = 0;
gdjs.GameCode.GDScoreTextObjects4.length = 0;
gdjs.GameCode.GDAlienObjects1.length = 0;
gdjs.GameCode.GDAlienObjects2.length = 0;
gdjs.GameCode.GDAlienObjects3.length = 0;
gdjs.GameCode.GDAlienObjects4.length = 0;
gdjs.GameCode.GDCursorObjects1.length = 0;
gdjs.GameCode.GDCursorObjects2.length = 0;
gdjs.GameCode.GDCursorObjects3.length = 0;
gdjs.GameCode.GDCursorObjects4.length = 0;
gdjs.GameCode.GDExplosionObjects1.length = 0;
gdjs.GameCode.GDExplosionObjects2.length = 0;
gdjs.GameCode.GDExplosionObjects3.length = 0;
gdjs.GameCode.GDExplosionObjects4.length = 0;
gdjs.GameCode.GDRadarObjects1.length = 0;
gdjs.GameCode.GDRadarObjects2.length = 0;
gdjs.GameCode.GDRadarObjects3.length = 0;
gdjs.GameCode.GDRadarObjects4.length = 0;
gdjs.GameCode.GDRadarHandleObjects1.length = 0;
gdjs.GameCode.GDRadarHandleObjects2.length = 0;
gdjs.GameCode.GDRadarHandleObjects3.length = 0;
gdjs.GameCode.GDRadarHandleObjects4.length = 0;
gdjs.GameCode.GDRadarBeepObjects1.length = 0;
gdjs.GameCode.GDRadarBeepObjects2.length = 0;
gdjs.GameCode.GDRadarBeepObjects3.length = 0;
gdjs.GameCode.GDRadarBeepObjects4.length = 0;
gdjs.GameCode.GDHealth2Objects1.length = 0;
gdjs.GameCode.GDHealth2Objects2.length = 0;
gdjs.GameCode.GDHealth2Objects3.length = 0;
gdjs.GameCode.GDHealth2Objects4.length = 0;
gdjs.GameCode.GDScoreCorrectObjects1.length = 0;
gdjs.GameCode.GDScoreCorrectObjects2.length = 0;
gdjs.GameCode.GDScoreCorrectObjects3.length = 0;
gdjs.GameCode.GDScoreCorrectObjects4.length = 0;
gdjs.GameCode.GDTimerIconObjects1.length = 0;
gdjs.GameCode.GDTimerIconObjects2.length = 0;
gdjs.GameCode.GDTimerIconObjects3.length = 0;
gdjs.GameCode.GDTimerIconObjects4.length = 0;
gdjs.GameCode.GDLaserRedObjects1.length = 0;
gdjs.GameCode.GDLaserRedObjects2.length = 0;
gdjs.GameCode.GDLaserRedObjects3.length = 0;
gdjs.GameCode.GDLaserRedObjects4.length = 0;
gdjs.GameCode.GDDeskObjects1.length = 0;
gdjs.GameCode.GDDeskObjects2.length = 0;
gdjs.GameCode.GDDeskObjects3.length = 0;
gdjs.GameCode.GDDeskObjects4.length = 0;
gdjs.GameCode.GDLaserGreenObjects1.length = 0;
gdjs.GameCode.GDLaserGreenObjects2.length = 0;
gdjs.GameCode.GDLaserGreenObjects3.length = 0;
gdjs.GameCode.GDLaserGreenObjects4.length = 0;
gdjs.GameCode.GDHealthMonitorObjects1.length = 0;
gdjs.GameCode.GDHealthMonitorObjects2.length = 0;
gdjs.GameCode.GDHealthMonitorObjects3.length = 0;
gdjs.GameCode.GDHealthMonitorObjects4.length = 0;
gdjs.GameCode.GDScoreWrongObjects1.length = 0;
gdjs.GameCode.GDScoreWrongObjects2.length = 0;
gdjs.GameCode.GDScoreWrongObjects3.length = 0;
gdjs.GameCode.GDScoreWrongObjects4.length = 0;

gdjs.GameCode.eventsList14(runtimeScene);
gdjs.GameCode.GDBackdropObjects1.length = 0;
gdjs.GameCode.GDBackdropObjects2.length = 0;
gdjs.GameCode.GDBackdropObjects3.length = 0;
gdjs.GameCode.GDBackdropObjects4.length = 0;
gdjs.GameCode.GDButtonCorrectObjects1.length = 0;
gdjs.GameCode.GDButtonCorrectObjects2.length = 0;
gdjs.GameCode.GDButtonCorrectObjects3.length = 0;
gdjs.GameCode.GDButtonCorrectObjects4.length = 0;
gdjs.GameCode.GDButtonWrongObjects1.length = 0;
gdjs.GameCode.GDButtonWrongObjects2.length = 0;
gdjs.GameCode.GDButtonWrongObjects3.length = 0;
gdjs.GameCode.GDButtonWrongObjects4.length = 0;
gdjs.GameCode.GDQuestionObjects1.length = 0;
gdjs.GameCode.GDQuestionObjects2.length = 0;
gdjs.GameCode.GDQuestionObjects3.length = 0;
gdjs.GameCode.GDQuestionObjects4.length = 0;
gdjs.GameCode.GDHealthTextObjects1.length = 0;
gdjs.GameCode.GDHealthTextObjects2.length = 0;
gdjs.GameCode.GDHealthTextObjects3.length = 0;
gdjs.GameCode.GDHealthTextObjects4.length = 0;
gdjs.GameCode.GDTimerTextObjects1.length = 0;
gdjs.GameCode.GDTimerTextObjects2.length = 0;
gdjs.GameCode.GDTimerTextObjects3.length = 0;
gdjs.GameCode.GDTimerTextObjects4.length = 0;
gdjs.GameCode.GDScoreTextObjects1.length = 0;
gdjs.GameCode.GDScoreTextObjects2.length = 0;
gdjs.GameCode.GDScoreTextObjects3.length = 0;
gdjs.GameCode.GDScoreTextObjects4.length = 0;
gdjs.GameCode.GDAlienObjects1.length = 0;
gdjs.GameCode.GDAlienObjects2.length = 0;
gdjs.GameCode.GDAlienObjects3.length = 0;
gdjs.GameCode.GDAlienObjects4.length = 0;
gdjs.GameCode.GDCursorObjects1.length = 0;
gdjs.GameCode.GDCursorObjects2.length = 0;
gdjs.GameCode.GDCursorObjects3.length = 0;
gdjs.GameCode.GDCursorObjects4.length = 0;
gdjs.GameCode.GDExplosionObjects1.length = 0;
gdjs.GameCode.GDExplosionObjects2.length = 0;
gdjs.GameCode.GDExplosionObjects3.length = 0;
gdjs.GameCode.GDExplosionObjects4.length = 0;
gdjs.GameCode.GDRadarObjects1.length = 0;
gdjs.GameCode.GDRadarObjects2.length = 0;
gdjs.GameCode.GDRadarObjects3.length = 0;
gdjs.GameCode.GDRadarObjects4.length = 0;
gdjs.GameCode.GDRadarHandleObjects1.length = 0;
gdjs.GameCode.GDRadarHandleObjects2.length = 0;
gdjs.GameCode.GDRadarHandleObjects3.length = 0;
gdjs.GameCode.GDRadarHandleObjects4.length = 0;
gdjs.GameCode.GDRadarBeepObjects1.length = 0;
gdjs.GameCode.GDRadarBeepObjects2.length = 0;
gdjs.GameCode.GDRadarBeepObjects3.length = 0;
gdjs.GameCode.GDRadarBeepObjects4.length = 0;
gdjs.GameCode.GDHealth2Objects1.length = 0;
gdjs.GameCode.GDHealth2Objects2.length = 0;
gdjs.GameCode.GDHealth2Objects3.length = 0;
gdjs.GameCode.GDHealth2Objects4.length = 0;
gdjs.GameCode.GDScoreCorrectObjects1.length = 0;
gdjs.GameCode.GDScoreCorrectObjects2.length = 0;
gdjs.GameCode.GDScoreCorrectObjects3.length = 0;
gdjs.GameCode.GDScoreCorrectObjects4.length = 0;
gdjs.GameCode.GDTimerIconObjects1.length = 0;
gdjs.GameCode.GDTimerIconObjects2.length = 0;
gdjs.GameCode.GDTimerIconObjects3.length = 0;
gdjs.GameCode.GDTimerIconObjects4.length = 0;
gdjs.GameCode.GDLaserRedObjects1.length = 0;
gdjs.GameCode.GDLaserRedObjects2.length = 0;
gdjs.GameCode.GDLaserRedObjects3.length = 0;
gdjs.GameCode.GDLaserRedObjects4.length = 0;
gdjs.GameCode.GDDeskObjects1.length = 0;
gdjs.GameCode.GDDeskObjects2.length = 0;
gdjs.GameCode.GDDeskObjects3.length = 0;
gdjs.GameCode.GDDeskObjects4.length = 0;
gdjs.GameCode.GDLaserGreenObjects1.length = 0;
gdjs.GameCode.GDLaserGreenObjects2.length = 0;
gdjs.GameCode.GDLaserGreenObjects3.length = 0;
gdjs.GameCode.GDLaserGreenObjects4.length = 0;
gdjs.GameCode.GDHealthMonitorObjects1.length = 0;
gdjs.GameCode.GDHealthMonitorObjects2.length = 0;
gdjs.GameCode.GDHealthMonitorObjects3.length = 0;
gdjs.GameCode.GDHealthMonitorObjects4.length = 0;
gdjs.GameCode.GDScoreWrongObjects1.length = 0;
gdjs.GameCode.GDScoreWrongObjects2.length = 0;
gdjs.GameCode.GDScoreWrongObjects3.length = 0;
gdjs.GameCode.GDScoreWrongObjects4.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
