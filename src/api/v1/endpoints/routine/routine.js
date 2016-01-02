import express from 'express';

import { NotFoundError } from '../../../../utils/errors';

function routineApi() 
{
    var router = express.Router();

    router.post('/',
        createRoutine,
        returnRoutine
    );

    router.get('/:id',
        findRoutineById,
        returnRoutine
    );

    router.put('/:id',
        findRoutineById,
        updateRoutine,
        returnRoutine
    );

    router.delete('/:id',
        findRoutineById,
        deleteRoutine
    );

    function createRoutine(req, res, next) 
    {
        try
        {
            req.routine = routine;
            next();
        }
        catch(err)
        {
            next(err);
        }
    }

    function findRoutineById(req, res, next) 
    {
        try
        {
            if(!req.params.id)
            {
                return next(new BadRequestError('No Routine Id specified.'));
            }
            req.routine = {name: "findRoutineById"};
            if(!req.routine)
            {
                return next(new NotFoundError('Routine not found'));
            }
            next();
        }
        catch(err)
        {
            next(err);
        }
    }

    function updateRoutine(req, res, next) 
    {
        try
        {
            req.routine = {name: "updateRoutine"};
            next();
        }
        catch(err)
        {
            next(err);
        }
    }

    function deleteRoutine(req, res, next) 
    {
        try
        {
            req.routine = {name: "deleteRoutine"};
            res.sendStatus(204);
        }
        catch(err)
        {
            next(err);
        }
    }

    function returnRoutine(req, res) 
    {
        res.json(req.routine);
    }

    return router;  
}

export default routineApi;