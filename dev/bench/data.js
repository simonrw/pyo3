window.BENCHMARK_DATA = {
  "lastUpdate": 1708733109759,
  "repoUrl": "https://github.com/simonrw/pyo3",
  "entries": {
    "pyo3-bench": [
      {
        "commit": {
          "author": {
            "email": "code@lilyf.org",
            "name": "Lily Foote",
            "username": "LilyFoote"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e145ae851adca553f62b0f9a0466605cd55fe34a",
          "message": "Update new_closure_bound closure signature (#3883)\n\n* Update new_closure_bound closure signature\n\nCo-authored-by: Icxolu <10486322+Icxolu@users.noreply.github.com>\n\n* Use anonymous lifetimes in closure bounds\n\nCo-authored-by: David Hewitt <mail@davidhewitt.dev>\n\n* Take &Bound in PyCFunction closures\n\n---------\n\nCo-authored-by: Icxolu <10486322+Icxolu@users.noreply.github.com>\nCo-authored-by: David Hewitt <mail@davidhewitt.dev>",
          "timestamp": "2024-02-23T14:07:54Z",
          "tree_id": "86d7981ba855bd26d9626fc6189d7f6447e509ba",
          "url": "https://github.com/simonrw/pyo3/commit/e145ae851adca553f62b0f9a0466605cd55fe34a"
        },
        "date": 1708733009259,
        "tool": "cargo",
        "benches": [
          {
            "name": "identify_object_type",
            "value": 447,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "collect_generic_iterator",
            "value": 9955152,
            "range": "± 73062",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_extract_fail",
            "value": 249,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_small",
            "value": 58,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_big_negative",
            "value": 173,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_big_positive",
            "value": 141,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_huge_negative",
            "value": 1272,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_huge_positive",
            "value": 1030,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "call_0",
            "value": 31004,
            "range": "± 584",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 114001,
            "range": "± 1701",
            "unit": "ns/iter"
          },
          {
            "name": "ordered_dunder_methods",
            "value": 42,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ordered_richcmp",
            "value": 39,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "decimal_via_extract",
            "value": 350,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 1081874,
            "range": "± 9515",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 3039141,
            "range": "± 21063",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2193539,
            "range": "± 19104",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 4743359,
            "range": "± 48880",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 7736858,
            "range": "± 16803",
            "unit": "ns/iter"
          },
          {
            "name": "mapping_from_dict",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "err_new_restore_and_fetch",
            "value": 146,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "err_new_without_gil",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_str_extract_success",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_str_extract_fail",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_str_downcast_success",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_str_downcast_fail",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_int_extract_success",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_int_extract_fail",
            "value": 252,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "extract_int_downcast_success",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_int_downcast_fail",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_float_extract_success",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_float_extract_fail",
            "value": 237,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "extract_float_downcast_success",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_float_downcast_fail",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "enum_from_pyobject",
            "value": 881,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "list_via_downcast",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "list_via_extract",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "not_a_list_via_downcast",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "not_a_list_via_extract",
            "value": 30,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "not_a_list_via_extract_enum",
            "value": 474,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "f64_from_pyobject",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 63,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 63,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "getattr_direct",
            "value": 117,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "getattr_intern",
            "value": 27,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 782974,
            "range": "± 48344",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 904984,
            "range": "± 189036",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 589706,
            "range": "± 974",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 497044,
            "range": "± 1875",
            "unit": "ns/iter"
          },
          {
            "name": "sequence_from_list",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 3131,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3713,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "set_new",
            "value": 2873042,
            "range": "± 42518",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1256429,
            "range": "± 11211",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 5628224,
            "range": "± 41041",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 1963875,
            "range": "± 43873",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 719153,
            "range": "± 45904",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 998457,
            "range": "± 199332",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 667301,
            "range": "± 18851",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 451441,
            "range": "± 13484",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_borrowed_item",
            "value": 589672,
            "range": "± 1577",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_borrowed_item_unchecked",
            "value": 434722,
            "range": "± 2265",
            "unit": "ns/iter"
          },
          {
            "name": "sequence_from_tuple",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new_list",
            "value": 269722,
            "range": "± 45257",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_to_list",
            "value": 182703,
            "range": "± 40226",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_into_py",
            "value": 88,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "pytest-bench": [
      {
        "commit": {
          "author": {
            "email": "code@lilyf.org",
            "name": "Lily Foote",
            "username": "LilyFoote"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e145ae851adca553f62b0f9a0466605cd55fe34a",
          "message": "Update new_closure_bound closure signature (#3883)\n\n* Update new_closure_bound closure signature\n\nCo-authored-by: Icxolu <10486322+Icxolu@users.noreply.github.com>\n\n* Use anonymous lifetimes in closure bounds\n\nCo-authored-by: David Hewitt <mail@davidhewitt.dev>\n\n* Take &Bound in PyCFunction closures\n\n---------\n\nCo-authored-by: Icxolu <10486322+Icxolu@users.noreply.github.com>\nCo-authored-by: David Hewitt <mail@davidhewitt.dev>",
          "timestamp": "2024-02-23T14:07:54Z",
          "tree_id": "86d7981ba855bd26d9626fc6189d7f6447e509ba",
          "url": "https://github.com/simonrw/pyo3/commit/e145ae851adca553f62b0f9a0466605cd55fe34a"
        },
        "date": 1708733096280,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init",
            "value": 6840926.965583623,
            "unit": "iter/sec",
            "range": "stddev: 1.022794683895914e-8",
            "extra": "mean: 146.17902004084422 nsec\nrounds: 195313"
          },
          {
            "name": "tests/test_pyclasses.py::test_empty_class_init_py",
            "value": 7369628.091615575,
            "unit": "iter/sec",
            "range": "stddev: 7.52065462973177e-9",
            "extra": "mean: 135.69205766810674 nsec\nrounds: 68461"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_py",
            "value": 14425259.589868536,
            "unit": "iter/sec",
            "range": "stddev: 4.2480771524474595e-9",
            "extra": "mean: 69.32284259912673 nsec\nrounds: 143411"
          },
          {
            "name": "tests/test_pyfunctions.py::test_none_rs",
            "value": 12114521.618487338,
            "unit": "iter/sec",
            "range": "stddev: 4.982698137253667e-9",
            "extra": "mean: 82.54556238307853 nsec\nrounds: 120265"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_py",
            "value": 4516128.953460487,
            "unit": "iter/sec",
            "range": "stddev: 2.2131019349758182e-8",
            "extra": "mean: 221.428575292065 nsec\nrounds: 194553"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_rs",
            "value": 3209873.8006871757,
            "unit": "iter/sec",
            "range": "stddev: 1.9886818255777347e-8",
            "extra": "mean: 311.53872771755636 nsec\nrounds: 147428"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_py",
            "value": 3848002.943291957,
            "unit": "iter/sec",
            "range": "stddev: 1.7721339011407144e-8",
            "extra": "mean: 259.87506109974606 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_rs",
            "value": 2608501.4146645926,
            "unit": "iter/sec",
            "range": "stddev: 2.3766498421727076e-8",
            "extra": "mean: 383.3618775815701 nsec\nrounds: 126663"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_py",
            "value": 2581556.5300615598,
            "unit": "iter/sec",
            "range": "stddev: 3.306547409087566e-8",
            "extra": "mean: 387.3632005943926 nsec\nrounds: 188715"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_kwargs_rs",
            "value": 2157069.8088572877,
            "unit": "iter/sec",
            "range": "stddev: 5.320486549491843e-8",
            "extra": "mean: 463.59185775714514 nsec\nrounds: 105186"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_py",
            "value": 2403943.8044884875,
            "unit": "iter/sec",
            "range": "stddev: 3.320990751957478e-8",
            "extra": "mean: 415.9831016568961 nsec\nrounds: 193424"
          },
          {
            "name": "tests/test_pyfunctions.py::test_simple_args_kwargs_rs",
            "value": 2239745.5494538285,
            "unit": "iter/sec",
            "range": "stddev: 2.882551700980335e-8",
            "extra": "mean: 446.4792887941464 nsec\nrounds: 105286"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_py",
            "value": 2998794.6153808725,
            "unit": "iter/sec",
            "range": "stddev: 2.6221372833548566e-8",
            "extra": "mean: 333.46731879235136 nsec\nrounds: 198808"
          },
          {
            "name": "tests/test_pyfunctions.py::test_args_kwargs_rs",
            "value": 5290394.928795497,
            "unit": "iter/sec",
            "range": "stddev: 1.487667036040976e-8",
            "extra": "mean: 189.02180526391766 nsec\nrounds: 194175"
          }
        ]
      }
    ]
  }
}