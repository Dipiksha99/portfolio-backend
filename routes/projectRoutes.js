const express = require("express");
const router = express.Router();

const Project = require("../models/Project");


// GET ALL PROJECTS

router.get("/", async(req,res)=>{

    try{

        const projects = await Project.find();

        res.json(projects);

    }

    catch(err){

        res.status(500).json({
            message:err.message
        });

    }

});


// ADD PROJECT

router.post("/", async(req,res)=>{

    try{

        const project = new Project(req.body);

        await project.save();

        res.status(201).json(project);

    }

    catch(err){

        res.status(400).json({
            message:err.message
        });

    }

});

// UPDATE PROJECT

router.put("/:id", async (req, res) => {
    try {

        const project = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!project) {
            return res.status(404).json({
                message: "Project Not Found"
            });
        }

        res.json(project);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }
});

// DELETE PROJECT

router.delete("/:id", async(req,res)=>{

    try{

        await Project.findByIdAndDelete(req.params.id);

        res.json({
            message:"Project Deleted Successfully"
        });

    }

    catch(err){

        res.status(500).json({
            message:err.message
        });

    }

});

module.exports = router;