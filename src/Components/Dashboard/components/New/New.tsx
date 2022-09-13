import "./New.css";
import { useState, useEffect } from "react";
import { db } from "../../../../services/firebase/firebase";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import Card from "../Card/Card";
import Button from "../../../Button/Button";

const New = () => {
    const [querySnapshot, setQuerySnapshot] = useState<DocumentData | null>();
    const [setsData, setSetsData] = useState<any>();

    useEffect(() => {
        if (querySnapshot) {
            return;
        }
        getQuerySnapshot();
    }, []);

    useEffect(() => {
        extractSetData();
    }, [querySnapshot]);

    const getQuerySnapshot = async () => {
        const newQuerySnapshot = await getDocs(collection(db, "sets"));
        setQuerySnapshot(newQuerySnapshot);
    };
    const extractSetData = () => {
        if (!querySnapshot) {
            return;
        }
        const newSetData: any = [];
        querySnapshot.forEach((set: any) => {
            newSetData.push({ id: set.id, data: set.data() });
        });
        setSetsData(newSetData);
    };

    return (
        <div className="new">
            <h2 className="new__title">New:</h2>
            <div className="new__cards-container">
                {setsData &&
                    setsData.map((set: any, index: number) => {
                        return (
                            <Card
                                key={set.id}
                                id={set.id}
                                index={set.data.index}
                                coverImageUrl={set.data.coverImage.url}
                                title={set.data.title}
                                author={set.data.createdBy}
                            />
                        );
                    })}
                <Button
                    className="cards-container__button"
                    text=">"
                    onClick={() => {}}
                />
            </div>
        </div>
    );
};

export default New;
