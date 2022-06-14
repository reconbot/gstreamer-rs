#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

mod gs_utils;

#[napi]
fn sum(a: i32, b: i32) -> i32 {
  a + b
}

#[napi]
fn reverse(input: String) -> String {
  input.chars().rev().collect()
}

#[napi]
fn fuckyea() {
  gs_utils::play()
}
