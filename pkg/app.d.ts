/* tslint:disable */
/* eslint-disable */
/**
*/
export function greet(): void;
/**
*/
export enum Movement {
  TOP,
  RIGHT,
  DOWN,
  LEFT,
}
/**
*/
export class Game {
  free(): void;
/**
* @param {number} width
* @param {number} height
* @param {number} snake_speed
* @param {number} snake_length
* @param {Vector} snake_direction
*/
  constructor(width: number, height: number, snake_speed: number, snake_length: number, snake_direction: Vector);
/**
* Runs the game.
* Interfaced with from JavaScript
* @param {number} timespan
* @param {number | undefined} movement
*/
  process(timespan: number, movement?: number): void;
/**
* Processes movement.
* Moves snake forward, if needed changes the direction of the snake.
* @param {number} dt
* @param {number | undefined} movement
*/
  process_movement(dt: number, movement?: number): void;
/**
* Processes food. Checks if food is supposed to be consumed
*/
  process_food(): void;
/**
* Checks if game is lost
* @returns {boolean}
*/
  is_over(): boolean;
/**
* Returs snake in JavaScript Array form.
* @returns {Array<any>}
*/
  get_snake(): Array<any>;
/**
* @returns {Vector}
*/
  food_location: Vector;
/**
* @returns {number}
*/
  height: number;
/**
* @returns {number}
*/
  score: number;
/**
* @returns {Vector}
*/
  snake_direction: Vector;
/**
* @returns {number}
*/
  snake_speed: number;
/**
* @returns {number}
*/
  width: number;
}
/**
*/
export class Vector {
  free(): void;
/**
* @param {number} x
* @param {number} y
*/
  constructor(x: number, y: number);
/**
* Legacy function for substraction of two vectors.
* Used by JavaScript as well as `ops::Sub` trait definition.
* @param {Vector} other
* @returns {Vector}
*/
  legacy_substract(other: Vector): Vector;
/**
* Legacy function for addition of two vectors.
* Used by JavaScript as well as `ops::Add` trait definition.
* @param {Vector} other
* @returns {Vector}
*/
  legacy_add(other: Vector): Vector;
/**
* Legacy function for checking if two vectors are equal.
* Used by JavaScript as well as `cmp::PartialEq` trait definition.
* @param {Vector} other
* @returns {boolean}
*/
  legacy_equal_to(other: Vector): boolean;
/**
* Checks if `self` is the opposite of Vector `other`
* @param {Vector} other
* @returns {boolean}
*/
  is_opposite(other: Vector): boolean;
/**
* Gets the opposite of a `self`
* @returns {Vector}
*/
  opposite(): Vector;
/**
* Returns normalized `self`
* @returns {Vector}
*/
  normalize(): Vector;
/**
* Returns `self` scaled by `scale`
* @param {number} scale
* @returns {Vector}
*/
  scale_by(scale: number): Vector;
/**
* Returns length of `self`
* @returns {number}
*/
  len(): number;
/**
* Returns the dot product of `self` and `other`
* @param {Vector} other
* @returns {number}
*/
  dot_product(other: Vector): number;
/**
* @returns {number}
*/
  x: number;
/**
* @returns {number}
*/
  y: number;
}
