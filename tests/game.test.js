import test from 'node:test';
import assert from 'node:assert/strict';
import { STORIES, STOPS, normalizeProgress, makeNewProgress, nextScene, correctAnswer } from '../src/game.js';

test('three stories have reachable endings and valid choices',()=>{
  assert.equal(Object.keys(STORIES).length,3);
  for(const [key,story] of Object.entries(STORIES)){
    const seen=new Set();const pending=['start'];let endings=0;
    while(pending.length){const id=pending.pop();if(seen.has(id))continue;seen.add(id);const node=story.scenes[id];assert.ok(node,`${key}.${id} exists`);if(node.ending){endings++;continue;}assert.ok(node.choices?.length,`${key}.${id} has choices`);node.choices.forEach((choice,i)=>{assert.equal(nextScene(key,id,i),choice.next);pending.push(choice.next);});}
    assert.ok(endings>=3,`${key}: at least 3 endings`);
  }
});
test('checkpoint answers and address data are complete',()=>{
  assert.equal(STOPS.length,4);
  STOPS.forEach((stop,index)=>{
    assert.match(stop.address,/Lincoln, IL 62656/);
    assert.equal(stop.answers.filter((_,i)=>correctAnswer(index,i)).length,1);
    assert.ok(stop.source.startsWith('https://'));
  });
});
test('corrupt and malicious progress is normalized',()=>{
  assert.deepEqual(normalizeProgress(null),makeNewProgress());
  assert.deepEqual(normalizeProgress({ fieldIndex:500,storiesCompleted:-10,endings:['x','x',5],discoveries:['a',null] }),{ fieldIndex:4,storiesCompleted:0,endings:['x'],discoveries:['a'] });
});
