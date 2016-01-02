import express from 'express';

import routine from './endpoints/routine/routine';
import transaction from './endpoints/transaction/transaction';

export default function() 
{
    var router = express.Router();

    router.use('/routine', routine());
    router.use('/transaction', transaction());

    return router;
}