import { useUpdateStore, useStore, TYPES } from "../../../context/ContextStore";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../../db/initDb";
import TodoListTableDisplay from "./TodoListTableDisplay";
import ToDoListAddTask from "./ToDoListAddTask";
import { udpateToDoListFromDatabase } from "./todoListUtils";
import { Spinner } from "@chakra-ui/react";
function TodoListDashboard() {
  const dispatch = useUpdateStore();
  const {store}= useStore()
  console.log(store);
  //"WqvztaX8vnTcsozFpCkeST0JGcC3"
  //"WqvztaX8vnTcsozFpCkeST0JGcC3"
  //"eyJhbGciOiJSUzI1NiIsImtpZCI6IjNhM2JkODk4ZGE1MGE4OWViOWUxY2YwYjdhN2VmZTM1OTNkNDEwNjgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmlyLXByb2plY3QtOWYyZGQiLCJhdWQiOiJmaXItcHJvamVjdC05ZjJkZCIsImF1dGhfdGltZSI6MTcwMjMxODg1OCwidXNlcl9pZCI6Ildxdnp0YVg4dm5UY3NvekZwQ2tlU1QwSkdjQzMiLCJzdWIiOiJXcXZ6dGFYOHZuVGNzb3pGcENrZVNUMEpHY0MzIiwiaWF0IjoxNzAyMzE4ODU4LCJleHAiOjE3MDIzMjI0NTgsImVtYWlsIjoiYXNkMTIzNEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYXNkMTIzNEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.kJOqfgLx7YLIxf--ZjvCPSuPJUkSaNQpGAoi-RxXGrnVm1ZM-nG20yFvndqb7atAEGeIiHHMdpQC34naJ6EP_50UXIvgPjPAz0-wveBxiRfjtOlljJaOxTp4TOrkuZgc-LNO-2OJrC32y3oYMkcw5wDIDO6aTpXqh8OtCUl315-50YhuLgBdrDLP0fz9DsNVdluf6ZTr8lWEOA28lzsUhs6rGpig3mR6xgl7UMA8yOgdp44N1_a_re7HWIQ0pvJs8qmJESSLMiSztUytGR_Qw8ftUUybQbZG38VTNmjXd13wNiYAKSTaULyuIcNTRrtjDugVDmrXFsD8mxJf2Ceh7Q"
  //"eyJhbGciOiJSUzI1NiIsImtpZCI6IjNhM2JkODk4ZGE1MGE4OWViOWUxY2YwYjdhN2VmZTM1OTNkNDEwNjgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmlyLXByb2plY3QtOWYyZGQiLCJhdWQiOiJmaXItcHJvamVjdC05ZjJkZCIsImF1dGhfdGltZSI6MTcwMjMxODgwMiwidXNlcl9pZCI6Ildxdnp0YVg4dm5UY3NvekZwQ2tlU1QwSkdjQzMiLCJzdWIiOiJXcXZ6dGFYOHZuVGNzb3pGcENrZVNUMEpHY0MzIiwiaWF0IjoxNzAyMzE4ODAyLCJleHAiOjE3MDIzMjI0MDIsImVtYWlsIjoiYXNkMTIzNEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYXNkMTIzNEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.jujVKQBryMdiiFh2IKiE9opWW-lJemAsHEZxgZ1R8tDWcKlqUeaysWOEH8mubDKBmIijLtFOIVsr1Miweq10aQQLDhqDMy-wffUyJFSisHwKTfJM6246NLtcohAeImtU9Q2w0T8Q5Kkoys_PNqvZp-osr23pW0eP9DKrxEaGd4s19gsEaCGGJ3so57nIHs3Vxoz1vPDFixXBv4R74vzxIEpdLwT8BOriOjBDeRPCvCVbWWh2LTrKGBKm-Az10YznVwOBViwzivKeJ-N2Yvte3wq4Wdgs5s9QJ_qZaarggfiDwX980TWCYiSbZnp8pEVcZg168FF4PGNbR0Z-aVSyuQ"
  const [displaySpinner, setdisplaySpinner] = useState(true);
  useEffect(() => {
    //load the data from db and update the store
    udpateToDoListFromDatabase(dispatch);
    setdisplaySpinner(false);
 
  }, []);

  return (
    <div>
      {" "}
      {displaySpinner ? (
        <Spinner />
      ) : (
        <>
          {" "}
          <TodoListTableDisplay /> <ToDoListAddTask />
        </>
      )}
    </div>
  );
}

export default TodoListDashboard;
