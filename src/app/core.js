"use strict";

import { List, Map } from 'immutable';


const INITIAL_STATE = Map();

function getWinners(vote) {
  if (!vote) return [];

  const [a, b] = vote.get('pair');
  const aVotes = vote.getIn(['tally', a], 0);
  const bVotes = vote.getIn(['tally', b], 0);

  if      (aVotes > bVotes)  return [a];
  else if (aVotes < bVotes)  return [b];
  else                       return [a, b];
}

const setEntries = (state, entries) => state.set('entries', entries);

function next(state) 
{
	const entries = state.get('entries').concat(getWinners(state.get('vote')));

	if(entries.size === 1)
	{
		//You generally want to morph old state into a new state rather than explicitly creating new state, due to possibly having unrelated data in this object in the future you don't want to modify.
		return state.remove('vote').remove('entries').set('winner', entries.first());
	}
	else
	{
		return state.merge({
			vote: Map({
				pair: entries.take(2)
			}),
			entries: entries.skip(2)
		});
	}
}

function vote(state, entry)
{
	return state.updateIn(
		['tally', entry],
		0,
		tally => tally + 1
	);
}

export { setEntries, next, vote };
export { INITIAL_STATE };