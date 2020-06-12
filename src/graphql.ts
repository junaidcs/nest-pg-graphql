
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Author {
    id: number;
    name?: string;
    rating?: string;
    age?: string;
}

export abstract class IQuery {
    abstract author(id: number): Author | Promise<Author>;

    abstract authors(): Author[] | Promise<Author[]>;
}
