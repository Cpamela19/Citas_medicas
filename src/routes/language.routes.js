import { Router } from "express";
import { methods as languageController } from "./../controllers/language.controller";
//
const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Cita:
 *       type: object
 *       properties:
 *          cedula:
 *            type: string
 *            description: Cedula del paciente
 *          paciente:
 *             type: string
 *             description: Nombre del paciente
 *          medico:
 *             type: string
 *             description: Nombre del medico
 *          fecha:
 *             type: string
 *             format: date
 *             description: Fecha de la cita
 *          estado:
 *             type: string
 *             description: Estado de la cita
 */
/**
 * @swagger
 * /api/citas:
 *  get:
 *      summary: obtener citas
 *      tags: [Cita]
 *      responses:
 *         200:
 *           description: TODAS LAS CITAS
 *           content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                      $ref: '#/components/schemas/Cita'
 */
/**
 * @swagger
 * /api/citas:
 *  post:
 *      summary: crear cita
 *      tags: [Cita]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Cita'
 *          responses:
 *            200:
 *              description: NUEVA CITA AGENDADA
 */
/**
 * @swagger
 * /api/citas/{id}:
 *  get:
 *      summary: informacion de una cita
 *      tags: [Cita]
 *      parameters:
*        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: el id de la cita  
 *      responses:
 *         200:
 *           description: informacion de una cita
 *           content:
 *              application/json:
 *                  schema:
 *                      type: objeto
 *                      $ref: '#/components/schemas/Cita'
 */
/**
* @swagger
* /api/citas/{id}:
*  put:
*      summary: actualizar cita
*      tags: [Cita]
*      parameters:
*        - in: path
*          name: id
*          schema:
*              type: string
*          required: true
*          description: el id de la cita  
*      requestBody:
*          required: true
*          content:
*              application/json:
*                  schema:
*                      type: object
*                      $ref: '#/components/schemas/Cita'
*      responses:
*         200:
*           description: actualizar cita
*           content:
*              application/json:
*                  schema:
*                      type: objeto
*                      $ref: '#/components/schemas/Cita'
*/
/**
 * 
* @swagger
* /api/citas/{id}:
*  delete:
*      summary: eliminar cita
*      tags: [Cita]
*      parameters:
*        - in: path
*          name: id
*          schema:
*              type: string
*          required: true
*          description: el id de la cita  
*      responses:
*         200:
*           description: cita eliminado
*           content:
*              application/json:
*                  schema:
*                      type: objeto
*                      $ref: '#/components/schemas/Cita'
*/

router.get("/", languageController.getCitas);
router.get("/:id", languageController.getCitas);
router.post("/", languageController.addCita);
router.put("/:id", languageController.updateCita);
router.delete("/:id", languageController.deleteCita);

export default router;
