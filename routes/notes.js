const router = require('express').Router();
const notesController = require('../controllers/notes');

/**
 * @swagger
 * components: 
 *      schemas:
 *          Note:
 *              type: object
 *              required:
 *                  - title
 *                  - desc
 *                  - when
 *              properties:
 *                  id: 
 *                      type: string
 *                      description: The auto generated id of the note
 *                  title:
 *                      type: string
 *                      description: The note title
 *                  desc:
 *                      type: string
 *                      description: The note description
 *                  when:
 *                      type: string
 *                      description: The note/task date by time
 *              example: 
 *                  title: The note
 *                  desc: The note description
 *                  
 *              
 */


/**
 * @swagger
 * tags:
 *  name: Notes
 *  description: Notes CRUD APIs
 */


/**
 * @swagger
 * /notes:
 *      get:
 *          summary: return the list of the notes
 *          tags: [Notes]
 *          responses:
 *              200:
 *                  description: the list of the notes
 *                  content: 
 *                      application/json: 
 *                          schema:
 *                              type: array
 *                              items: 
 *                                  $ref: '#/components/schemas/Note'
 */
router.get('/', notesController.getAllNotes);

/**
 * @swagger
 * /notes/{id}:
 *      get:
 *          summary: return the note by id
 *          tags: [Notes]
 *          parameters: 
 *              - in: path
 *                name: id
 *                schema: 
 *                      type: string
 *                required: true
 *                description: The note id
 *          responses: 
 *              200:
 *                  description: The note found by id
 *                  contents:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Note'
 *              404:
 *                  description: Not found
 */
router.get('/:id', notesController.getSpecificNote);


/**
 * @swagger
 * /notes:
 *      post:
 *          summary: create the new note
 *          tags: [Notes]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Note'
 *          responses:
 *              201:
 *                  description: The note is created
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Note'
 *              500:
 *                  description: internal server error    
 */
router.post('/', notesController.createNote);

module.exports = router;

