import SearchBar from "../SearchBar";
import {
  Conteiner,
  NotCards,
  CardsBox,
  ContentBox,
  DivName,
  DivButton,
  Div,
} from "./style";
import CardGroups from "../CardGroups";
import { useEffect, useState } from "react";
import noGroupsHabits from "../../assets/img/noGroupHabits.png";
import { useSelector, useDispatch } from "react-redux";
import { addSubPageThunk } from "../../Store/modules/groups/thunk";
import {
  searchGroupThunk,
  searchGroupSubscriptionsThunk,
} from "../../Store/modules/groups/thunk";
import { BsPlusCircleFill } from "react-icons/bs";
import groupsImg from "../../assets/img/groups.png";
import Button from "../Button";
import PopUpCreateGroup from "../PopUpCreateGroup";
import PopUpEditGroup from "../PopUpEditGroup";
import { NativeSelect } from "@mui/material";
import PopUpRemove from "../PopUpRemove";
function Groups({ groupViewer, setGroup }) {
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.group);
  const [popup, setPopup] = useState(false);
  const [popupEdit, setPopupEdit] = useState(false);
  const [popupRemove, setPopupRemove] = useState(false);
  const [ispage] = useState(true);
  const [nextPage, setNextPage] = useState("");
  const [update, setUpdate] = useState(true);
  const [setInput] = useState("Grupos");
  const [searchBar, setSearchBar] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(groups);
  const [itemGroup, setItemGroup] = useState({});

  const show_more = () => {
    dispatch(addSubPageThunk(nextPage, groups, setNextPage));
  };

  const showSubs = () => {
    setUpdate(!update);
  };

  const filtrarItens = (text) => {
    setSearchBar(text);
    setFilteredProducts(
      groups.filter((item) => {
        return (
          (item.name.toUpperCase().indexOf(text.toUpperCase()) > -1 ||
            item.category.toUpperCase().indexOf(text.toUpperCase()) > -1 ||
            item.creator.username.toUpperCase().indexOf(text.toUpperCase()) >
              -1) &&
          item.name
        );
      })
    );
  };

  useEffect(() => {
    setFilteredProducts(groups);
  }, [groups]);

  const submit = () => {
    setSearchBar("");
  };

  const openCardGroup = (itemGroup) => {
    groupViewer();
    setGroup(itemGroup);
  };

  useEffect(() => {
    if (update) {
      dispatch(searchGroupThunk(setNextPage));
    } else {
      dispatch(searchGroupSubscriptionsThunk());
    }
  }, [update]);

  return ispage ? (
    <Conteiner>
      <ContentBox>
        <Div>
          <DivName>
            <div>
              <img src={groupsImg} alt="habits" />
              <NativeSelect onChange={showSubs} fullWidth id="select">
                <option defaultValue={(event) => setInput(event.target.value)}>
                  Grupos
                </option>
                <option defaultValue={(event) => setInput(event.target.value)}>
                  Grupos inscritos
                </option>
              </NativeSelect>
            </div>
            <BsPlusCircleFill
              className="cursor"
              onClick={() => setPopup(true)}
              size={"20px"}
              color="#2ECC71"
            />
          </DivName>
          <SearchBar
            onclick={submit}
            searchBar={searchBar}
            filtrarItens={filtrarItens}
          />
        </Div>
        <CardsBox>
          {filteredProducts &&
            filteredProducts.map((item, index) => (
              <CardGroups
                key={index}
                item={item}
                filteredProducts={filteredProducts}
                onclick={openCardGroup}
                width="100%"
                setPopupEdit={setPopupEdit}
                setItemGroup={setItemGroup}
                setPopupRemove={setPopupRemove}
              />
            ))}
        </CardsBox>

        {update && (
          <DivButton>
            <Button onclick={show_more} text={"Mostrar Mais"}></Button>
          </DivButton>
        )}
      </ContentBox>
      {popup && <PopUpCreateGroup setPopup={setPopup}></PopUpCreateGroup>}
      {popupEdit && (
        <PopUpEditGroup
          item={itemGroup}
          idGroup={itemGroup.id}
          setPopup={setPopupEdit}
        ></PopUpEditGroup>
      )}
      {popupRemove && (
        <PopUpRemove
          text={"grupo"}
          item={itemGroup}
          id={itemGroup.id}
          setPopup={setPopupRemove}
        ></PopUpRemove>
      )}
    </Conteiner>
  ) : (
    <Conteiner>
      <ContentBox>
        <SearchBar />
        <NotCards>
          <figure>
            <img src={noGroupsHabits} alt="noGroupsHabits" />
          </figure>
          <h2> Sem grupos... </h2>
        </NotCards>
      </ContentBox>
    </Conteiner>
  );
}

export default Groups;
