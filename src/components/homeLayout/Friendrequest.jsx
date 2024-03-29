import Button from "@mui/material/Button";
import Image from "../layout/Image";
import profile from "../../assets/profile.png";
import React, { useEffect, useState } from "react";
import {
    getDatabase,
    ref,
    onValue,
    set,
    push,
    remove,
} from "firebase/database";
import { useSelector } from "react-redux";
import {MdOutlineDownloadDone} from "react-icons/md"
import {RxCross2} from "react-icons/rx"

const Friendrequest = () => {
    const db = getDatabase();

    let [reqList, setReqList] = useState([]);
    let userData = useSelector((state) => state.loggedUser.loginUser);

    useEffect(() => {
        onValue(ref(db, "friendrequest/"), (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                if (item.val().receiverid == userData.uid) {
                    arr.push({ ...item.val(), id: item.key });
                }
            });
            setReqList(arr);
        });
    }, []);

    let handelReject = (item) => {
        remove(ref(db, "friendrequest/" + item.id));
    };

    let handelAccept = (item) => {
        set(push(ref(db, "friends")), {
            ...item,
        }).then(()=>{
            remove(ref(db, "friendrequest/" + item.id));
        })
    };

    return (
        <div className="box">
            <div className="heading">
                <h3 className="groupheading">Friend Request</h3>
            </div>
            {reqList.map((item) => (
                <div className="list">
                    <div className="profileImg">
                        <Image className="imgprofile" imgsrc={profile} />
                    </div>
                    <div className="profileName">
                        <h3>{item.sendername}</h3>
                        <p>Hi Guys, Wassup!</p>
                    </div>
                    <div className="btnflex">
                        <Button
                            onClick={() => handelAccept(item)}
                            className="btncolor tooltip"
                            size="small"
                            variant="contained"
                        >
                        <span className="tooltiptext">accept</span>
                            <MdOutlineDownloadDone/>
                        </Button>
                        <Button
                            onClick={() => handelReject(item)}
                            className="btncolorerror tooltip"
                            size="small"
                            variant="contained"
                        >
                        <span className="tooltiptext">delete</span>
                            <RxCross2/>
                        </Button>
                    </div>
                </div>
            ))}

            {reqList.length == 0 ? (
                <p className="nofrientmassage">No friend requests available</p>
            ) : (
                ""
            )}
        </div>
    );
};

export default Friendrequest;
