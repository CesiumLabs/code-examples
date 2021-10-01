module Array =
    let tryBinarySearchWith comparer (value: 'a) (source: 'a[]) =
        let rec loop lo hi =
            if lo > hi then None
            else
                let mid = lo + (hi - lo) / 2
                match sign <| comparer value source.[mid] with
                | 0 -> Some mid
                | 1 -> loop (mid + 1) hi
                | _ -> loop lo (mid - 1)

        loop 0 (source.Length - 1)

    let tryBinarySearch value source =
        source |> tryBinarySearchWith compare value

let source1 = [|1 .. 100|]
match source1 |> Array.tryBinarySearch 42 with
| Some index -> printfn "Found at index %d" index
| None -> printfn "Nope!"

let reverseCompare a b = compare b a
let source2 = source1 |> Array.sortWith reverseCompare
match source2 |> Array.tryBinarySearchWith reverseCompare 42 with
| Some index -> printfn "Found at index %d" index
| None -> printfn "Nope!"
