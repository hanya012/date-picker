/**
 * Created by realm on 2017/2/27.
 */

import marked from 'marked';
import { DEBUG } from 'config';
import EasyDate from './EasyDate';

if (DEBUG) {
  $.get('./README.md')
    .then( content => {
      let html = marked(content);
      $('#readme').html(html);
    });
}

$('[name=data-range-dynamic]').on('click', event => {
  let target = $(event.target);
  let data = target.data();
  if (!('tqbDatePicker' in data)) {
    return;
  }
  let start = new EasyDate(data.start);
  let end = new EasyDate(data.end);
  start = start.add('+1d').toString();
  end = end.add('1d').toString();
  target.data({
    start: start,
    end: end
  });
});