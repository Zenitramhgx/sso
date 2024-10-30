import { Router } from "express";
import * as credenciales from '../controllers/credenciales';
import * as codigos from '../controllers/codigos';
import * as preferencias from '../controllers/preferencias';
import * as historial from '../controllers/historial';
import Autenticacion from '../middleware/Autenticacion';

const router = Router();

router.get('/codigos/:idCodigo', Autenticacion('Codigos','2'), codigos.getCodigo );
router.get('/:idCredencial/codigos', Autenticacion('Codigos','2'), codigos.getCodigos );
router.post('/:idCredencial/codigos', codigos.insertCodigo );
router.get('/codigos', Autenticacion('Codigos','2'), codigos.getCodigos );
router.post('/:idCredencial/codigos/:codigo', codigos.validarCodigo );
router.delete('/:idCredencial/codigos', codigos.deleteCodigo );

router.get('/:idCredencial/preferencias',Autenticacion('Preferencias','2'), preferencias.getPreferencia );
router.put('/:idCredencial/preferencias', Autenticacion('Preferencias','3'), preferencias.updatePreferencia );

router.get('/:idCredencial/historial', Autenticacion('Historial','2'), historial.getHistorial );
router.get('/bitacora', Autenticacion('Historial','2'), historial.getBitacora );
router.post('/:idCredencial/historial', Autenticacion('Historial','1'), historial.insertHistorial );

router.get('/:idCredencial', Autenticacion('Credenciales','2'), credenciales.getCredencial );
router.put('/:idCredencial', Autenticacion('Credenciales','3'), credenciales.updateCredencial );
router.delete('/:idCredencial', Autenticacion('Credenciales','4'), credenciales.deleteCredencial );
router.get('/', Autenticacion('Credenciales','2'), credenciales.getCredenciales );
router.post('/', credenciales.insertCredencial );

export default router;