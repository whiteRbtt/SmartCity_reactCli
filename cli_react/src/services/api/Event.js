import axios from 'axios';

import { getToken } from '../Toolbox';

import { url } from '../string';

const getAllEvents = async () => {
    return await axios
        .get(`${url}/event/all`, {
            headers: { authorization: `Bearer ${getToken()}` },
        })
        .then((res) => {
            return res.data.events;
        })
        .catch((err) => {
            throw err;
        });
};

const getEvent = async (idEvent) => {
    return await axios
        .get(`${url}/event?idEvent=${idEvent}`, {
            headers: { authorization: `Bearer ${getToken()}` },
        })
        .then((res) => {
            return res.data.event;
        })
        .catch((err) => {
            throw err;
        });
};

const getPopularEvents = async () => {
    return await axios
        .get(`${url}/event/popular`, {
            headers: { authorization: `Bearer ${getToken()}` },
        })
        .then((res) => {
            return res.data.events;
        })
        .catch((err) => {
            throw err;
        });
};

const searchEvent = async (date, city) => {
    let request = '';
    if (!date) request = `${url}/event/search?city=${city}`;
    else if (!city) request = `${url}/event/search?date=${date}`;
    else request = `${url}/event/search?date=${date}&city=${city}`;

    return await axios
        .get(request, {
            headers: { authorization: `Bearer ${getToken()}` },
        })
        .then((res) => {
            return res.data.events;
        })
        .catch((err) => {
            throw err;
        });
};

const addEvent = async (
    name,
    startDate,
    endDate,
    street,
    number,
    postCode,
    city,
    isChildFriendly,
    description,
    type,
    securityLv,
    isMaskNeeded,
    isCstNeeded,
    maxPlace
) => {
    await axios
        .post(
            `${url}/event/add`,
            {
                name: name,
                startingDate: startDate,
                endingDate: endDate,
                streetName: street,
                houseNumber: number,
                postalCode: postCode,
                city: city,
                childrenAccepted: isChildFriendly,
                description: description,
                type: type,
                securityLevel: securityLv,
                requireMask: isMaskNeeded,
                requireCovidSafeTicket: isCstNeeded,
                maxPlaceCount: maxPlace,
            },
            {
                headers: { authorization: `Bearer ${getToken()}` },
            }
        )
        .then((res) => {
            return res;
        })
        .catch((err) => {
            throw err;
        });
};

const updateEvent = async (
    id,
    name,
    startDate,
    endDate,
    street,
    number,
    postCode,
    city,
    isChildFriendly,
    description,
    type,
    securityLv,
    isMaskNeeded,
    isCstNeeded,
    maxPlace,
    mailCreator
) => {
    await axios
        .patch(
            `${url}/event/update`,
            {
                idEvent: id,
                name: name,
                startingDate: startDate,
                endingDate: endDate,
                streetName: street,
                houseNumber: number,
                postalCode: postCode,
                city: city,
                childrenAccepted: isChildFriendly,
                description: description,
                type: type,
                securityLevel: securityLv,
                requireMask: isMaskNeeded,
                requireCovidSafeTicket: isCstNeeded,
                maxPlaceCount: maxPlace,
                mailAddressCreator: mailCreator,
            },
            {
                headers: { authorization: `Bearer ${getToken()}` },
            }
        )
        .then((res) => {
            return res;
        })
        .catch((err) => {
            throw err;
        });
};

const deleteEvent = async (idEvent) => {
    return await axios
        .delete(`${url}/event/delete`, {
            headers: { authorization: `Bearer ${getToken()}` },
            data: {
                idEvent: idEvent,
            },
        })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            throw err;
        });
};

export {
    getAllEvents,
    getEvent,
    getPopularEvents,
    searchEvent,
    addEvent,
    updateEvent,
    deleteEvent,
};
