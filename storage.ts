import nextCookie from 'next-cookies';
import cookie from 'js-cookie';

export const Storage = {
    Cookie: {
        get: (key: string) => {
            return cookie.get(key);
        },
        set: (key: string, value: any, expires = 1) => {
            cookie.set(key, value, { expires });
        },
        remove: (key: string) => {
            cookie.remove(key);
        },
    },
    ServerCookie: {
        get: (key: string, ctx: { req?: { headers: { cookie?: string } } }) => {
            return nextCookie(ctx)[key];
        },
    },
    Session: {
        get: <T extends unknown>(key: string): T => {
            let item = sessionStorage.getItem(key);
            return item !== null ? JSON.parse(item) : null;
        },
        set: <T extends unknown>(key: string, value: T) => {
            if (value === null) return;
            sessionStorage.setItem(key, JSON.stringify(value));
        },
        remove: (key: string) => {
            sessionStorage.removeItem(key);
        },
    },
    Local: {
        get: <T extends unknown>(key: string): T => {
            let item = localStorage.getItem(key);
            return item !== null ? JSON.parse(item) : null;
        },
        set: <T extends unknown>(key: string, value: T) => {
            if (value === null) return;
            localStorage.setItem(key, JSON.stringify(value));
        },
        remove: (key: string) => {
            localStorage.removeItem(key);
        },
    },
};
