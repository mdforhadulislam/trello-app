const crud = require("../../lib/crud");
const Task = require("../../models/Task");

class TaskMethod{
   constructor(){}
   taskCreate(task,done,list_id){
      const newTask = new Task(task,done,list_id)
      const createTask = crud.create("task",newTask)
      return createTask
   }
   taskUpdateById(id,data){
      const updateTask = crud.update("task",id,data)
      return updateTask
   }
   taskDeleteById(id){
      const deleteTask = crud.delete("task",id)
      return deleteTask
   }
   taskGetByListId(list_id){
      const allTask = crud.read("task")
      const listedTask = allTask.filter(task => task.list_id===list_id)
      return listedTask
   }
}


module.exports = new TaskMethod()