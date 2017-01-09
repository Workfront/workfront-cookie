// Type definitions for workfront-cookie [1.0.0]
// Project: workfront-cookie
// Definitions by: Hovhannes Babayan <bhovhannes@gmail.com>

export as namespace WorkfrontCookie

export const COOKIE_NAME: string

export function getSessionID(cookieString?: string): string | undefined

export function readCookie(name: string, cookieString?: string): string | undefined
