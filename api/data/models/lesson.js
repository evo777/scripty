const mongoose = require('mongoose');

/* Data type: Content
 *
 * This represents lessons. Boggles the mind, right?
 *
 * They may seem minimal but currently the burden of knowing which lesson a
 * piece of content belongs to is placed upon the content. See the comment in
 * `content.js` for reference.
 *
 * Could benefit from storing a hyperlink to an icon, or an icon name for the
 * LessonTitleCardList
 *
 * @title: <String>
 *  The title of the lesson.
 * @description: <String>
 *  A blurb which describes the lesson.
 */

const lessonSchema = mongoose.Schema({
  title: String,
  description: String,
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;