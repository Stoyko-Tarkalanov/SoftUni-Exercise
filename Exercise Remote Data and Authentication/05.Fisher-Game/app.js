function attachEvents() {
    //Not working !!

    document.getElementsByClassName('load')[0].addEventListener('click', () => {
        getAllData();
    });


    async function getAllData() {
        const data = await request('http://localhost:3030/data/catches');

        const info = Object.entries(data).map(create).join('');
        console.log(info);
        document.getElementById('catches').innerHTML += info;

        function create([]) {
            const result = `
            <div class="catch">
            <label>Angler</label>
            <input type="text" class="angler" value="John Doe" />
            <hr>
            <label>Weight</label>
            <input type="number" class="weight" value="554" />
            <hr>
            <label>Species</label>
            <input type="text" class="species" value="Atlantic Blue Marlin" />
            <hr>
            <label>Location</label>
            <input type="text" class="location" value="Buenos Aires, Argentina" />
            <hr>
            <label>Bait</label>
            <input type="text" class="bait" value="trolled pink" />
            <hr>
            <label>Capture Time</label>
            <input type="number" class="captureTime" value="120" />
            <hr>
            <button disabled class="update">Update</button>
            <button disabled class="delete">Delete</button>
        </div>
    </div>`;
            return result;
        }
    }
}

attachEvents();

