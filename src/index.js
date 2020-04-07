import $ from "jquery";
global.$ = $;
import Article from './article'

import css from './style.css';


let article= new Article({
    head: 'Коронавирус - придуман для отвлечения внимания от глобальных проблем ?',
    description: 'Вероятнее всего',
});

article.render();  