defmodule BuilderTest do
  use ExUnit.Case
  doctest Builder

  test "greets the world" do
    assert Builder.hello() == :world
  end
end
