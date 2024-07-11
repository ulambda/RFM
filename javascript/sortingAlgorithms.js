// AUDIO CONTROLING //
var ids = [];
var directories = [];
var titles = [];
var artists = [];
var covers = [];
var listens = [];
var downloads = [];
var duration = [];
var genre = [];
var dateRelease = [];
var mood = [];
var instrument = [];

var myName = null;
if(document.getElementById("username")) {
    myName = document.getElementById("username").innerHTML;
}
var myIds = [];
var myDirectories = [];
var myTitles = [];
var myArtists = [];
var myCovers = [];
var myListens = [];
var myDownloads = [];
var myDuration = [];
var myGenre = [];
var myDateRelease = [];
var myMood = [];
var myInstrument = [];

var songsTable = document.getElementById('songsTable');

var rowLength = songsTable.rows.length;

const audio = document.querySelector('audio');
var playButtonPress = 0;

for (i = 1; i < rowLength; i++){

    var songsCells = songsTable.rows.item(i).cells;

    var cellLength = songsCells.length;

    if(songsCells.item(3).innerHTML == myName) {
        for(var j = 0; j < cellLength; j++){

            var cellVal = songsCells.item(j).innerHTML;
            if(j == 0) {
                myIds.push(cellVal);
            }
            else if(j == 1) {
                myDirectories.push(cellVal);
            }
            else if(j == 2) {
                myTitles.push(cellVal);
            }
            else if(j == 3) {
                myArtists.push(cellVal);
            }
            else if(j == 4) {
                myCovers.push(cellVal);
            }
            else if(j == 5) {
                myListens.push(parseInt(cellVal));
            }
            else if(j == 6) {
                myDownloads.push(parseInt(cellVal));
            }
            else if(j == 7) {
                myDuration.push(cellVal.toString());
            }
            else if(j == 8) {
                myGenre.push(cellVal);
            }
            else if(j == 9) {
                myMood.push(cellVal);
            }
            else if(j == 10) {
                myInstrument.push(cellVal);
            }
            else if(j == 11) {
                myDateRelease.push(cellVal);
            }
        }
    }

    for(var j = 0; j < cellLength; j++){
        var cellVal = songsCells.item(j).innerHTML;
        if(j == 0) {
            ids.push(cellVal);
        }
        else if(j == 1) {
            directories.push(cellVal);
        }
        else if(j == 2) {
            titles.push(cellVal);
        }
        else if(j == 3) {
            artists.push(cellVal);
        }
        else if(j == 4) {
            covers.push(cellVal);
        }
        else if(j == 5) {
            listens.push(parseInt(cellVal));
        }
        else if(j == 6) {
            downloads.push(parseInt(cellVal));
        }
        else if(j == 7) {
            duration.push(cellVal.toString());
        }
        else if(j == 8) {
            genre.push(cellVal);
        }
        else if(j == 9) {
            mood.push(cellVal);
        }
        else if(j == 10) {
            instrument.push(cellVal);
        }
        else if(j == 11) {
            dateRelease.push(cellVal);
        }
    }
}

var isPlaying = false;
var songID;
var currentList = 0;

var myAudio = [];

for(var i = 0; i < directories.length; i++) {
    myAudio.push("../rfm/" + directories[i]);
}

var myMyAudio = [];

for(var i = 0; i < myDirectories.length; i++) {
    myMyAudio.push("../rfm/" + myDirectories[i]);
}

var playlistString = document.getElementById("playlistString").innerText;

var playlists = playlistString.split(";");

var playlistNames = [];
var playlistValues = [];

for(var i = 0; i < playlists.length; i++) {
    if (i % 2 == 0) {
        if(playlists[i] != "")
            playlistNames.push(playlists[i]);
    }else{
        if(playlists[i] != "undefined")
            playlistValues.push(playlists[i]);
    }
}

if(window.location.pathname.toString().includes("library.php")) {
    
    var panel = document.getElementById("panel");

    for(var i = 0; i < playlistNames.length; i++) {
        var button = document.createElement("button");
        button.innerText = playlistNames[i];
        button.setAttribute("onClick", "sortSongs('main-container', 'musicList', 5, 15, 'false', 0, 0, '', '" + playlistValues[i] + "', " + i + ")");
        button.classList = "playlistbtn";

        var breakElement = document.createElement("br");
        
        panel.appendChild(button);
        panel.appendChild(breakElement);
        document.getElementById("filterContainer").appendChild(panel);
    }

    var newPlaylistButton = document.createElement("button");
    newPlaylistButton.innerText = "+";
    //newPlaylistButton.setAttribute("onClick", "createPlaylist()");
    newPlaylistButton.id="myBtn";
    var breakElement = document.createElement("br");

    panel.appendChild(newPlaylistButton);
    panel.appendChild(breakElement);
    document.getElementById("filterContainer").appendChild(panel);
    document.getElementsByClassName("accordion")[0].click();
}

var sortingOrder = [];
var listNames = [];

var previousLibraryColor;
var linearGradients = ["linear-gradient(180deg, rgba(60,221,211,1) 0%, rgba(37,44,73,1) 100%)", "linear-gradient(180deg, rgba(60,160,221,1) 0%, rgba(37,44,73,1) 100%)", "linear-gradient(180deg, rgba(162,60,221,1) 0%, rgba(37,44,73,1) 100%)"];
var randomLinearGradient = Math.floor(Math.random() * (linearGradients.length - 0) + 0);
var previousPlaylistID;

var scrollToBottom = false;
var timesScrolledToBottom = 0;
var canLoadMore = true;

function setScrollToBottom() {
    scrollToBottom = true;
    timesScrolledToBottom += 1;
}

var currentSortType;

function sortSongs(containerName, listName, sortType, amount, ranked, listID, mode, searchInput, playlistIds, playlistID) {
    
    if(currentSortType != sortType) {
        canLoadMore = true;
        currentSortType = sortType;
    }

    //for(var i = 0; i < activeGenreFilters.length;){
    //    str = activeGenreFilters[i];
    //    str = str.replace(/\s/g, '');
    //    document.getElementById(str).click(); 
    //}
    //for(var i = 0; i < activeMoodFilters.length;){
    //    str = activeMoodFilters[i];
    //    str = str.replace(/\s/g, '');
    //    document.getElementById(str).click(); 
    //}
    //for(var i = 0; i < activeInstrumentFilters.length;){
    //    str = activeInstrumentFilters[i];
    //    str = str.replace(/\s/g, '');
    //    document.getElementById(str).click(); 
    //}
    
    searchInput = searchInput || "";
    playlistIds = playlistIds || "";
    playlistID = playlistID || "";

    if(document.getElementById(listName))
        document.getElementById(listName).remove();

    var newSortingOrder = [];

    var list = document.createElement("ul");
    list.className = "musiclist";
    list.id = listName;
    
    var idsPlaylist = playlistIds.toString().split(".");

    if(mode == 0) {

        if(amount > directories.length) {
            amount = directories.length;
            canLoadMore = false;
        }

        if(listNames.includes(listName)) {
            sortingOrder = [];
        }
        else {
            listNames.push(listName);
        }
        
        if(sortType == 0)
        {
            for(var i = 0; i < amount; i++) {
                newSortingOrder.push(i);
            }
        }
        else if(sortType == 1) {
            for(var s = 0; s < amount; s++) {
                var largestNumberId;
                var largestNumber = 0;
                for(var i = 0; i < directories.length; i++) {
                    if(listens[i] >= largestNumber && !newSortingOrder.includes(i))
                    {
                        largestNumber = listens[i];
                        largestNumberId = i;
                    }
                }
                newSortingOrder.push(largestNumberId);
            }
        }
        else if(sortType == 2) {
            i = directories.length - 1;
            for(var s = 0; s < amount; s++) {
                newSortingOrder.push(i - s);
            }
        }
        else if(sortType == 3) {
            for(var s = 0; s < amount; s++) {
                var largestNumberId;
                var largestNumber = 0;
                for(var i = 0; i < downloads.length; i++) {
                    if(downloads[i] >= largestNumber && !newSortingOrder.includes(i))
                    {
                        largestNumber = downloads[i];
                        largestNumberId = i;
                    }
                }
                newSortingOrder.push(largestNumberId);
            }
        }
        else if(sortType == 4) {
            for(var i = 0; i < titles.length; i++) {
                if((titles[i].toLowerCase().includes(searchInput.toLowerCase()) || 
                    artists[i].toLowerCase().includes(searchInput.toLowerCase()) || 
                    genre[i].toLowerCase().includes(searchInput.toLowerCase()) || 
                    mood[i].toLowerCase().includes(searchInput.toLowerCase()) || 
                    instrument[i].toLowerCase().includes(searchInput.toLowerCase())
                    ) && newSortingOrder.length < amount) {
                    newSortingOrder.push(i);
                }
            }
        }
        var path = window.location.pathname;
        var page = path.split("/").pop();
        if((playlistID != '' || playlistID == 0) && page == "library.php")
        {
            for(var i = 0; i < amount; i++) {
                for(var j = 0; j < ids.length; j++) {
                    if(idsPlaylist.includes(ids[j]) && !newSortingOrder.includes(j)) {
                        newSortingOrder.push(j);
                    }
                }
            }
            if(playlistNames[playlistID] == undefined) {
                playlistID = 0;
            }
            if(document.getElementById("playlistText")) {
                document.getElementById("playlistText").innerHTML = playlistNames[playlistID];
            }

            
            if(previousPlaylistID != playlistID) {
                while(randomLinearGradient == previousLibraryColor){
                    randomLinearGradient = Math.floor(Math.random() * (linearGradients.length - 0) + 0);
                }
                previousPlaylistID = playlistID;
                previousLibraryColor = randomLinearGradient;
                //document.getElementsByClassName("sortingNavigation")[0].style.background = linearGradients[randomLinearGradient];
                //document.getElementsByClassName("main-container")[0].style.removeProperty('background');
                
                //document.getElementsByClassName("main-container")[0].style.background = linearGradients[randomLinearGradient];

                //console.log(document.documentElement.style.getProperty('--backgroundColorOpacity'));
                if(document.documentElement.style.getPropertyValue('--backgroundColorOpacity') == 0) {
                    document.documentElement.style.setProperty('--backgroundColor', linearGradients[randomLinearGradient]);
                    document.documentElement.style.setProperty('--backgroundColorOpacity', 1);
                    document.getElementsByClassName("main-container")[0].style.opacity = 1;
                }
                else {
                    document.getElementsByClassName("main-container")[0].style.backgroundImage = linearGradients[randomLinearGradient];
                    document.documentElement.style.setProperty('--backgroundColorOpacity', 0);
                    document.getElementsByClassName("main-container")[0].style.opacity = 1;
                }
            }
        }
        

        sortingOrder.push(newSortingOrder);
        if(amount > newSortingOrder.length) {
            amount = newSortingOrder.length;
            canLoadMore = false;
        }
        

        for(var i = 0; i < amount; i++) {

            if(document.getElementById("libraryLink")) {
                var SaveText = document.createElement("p");
                SaveText.innerHTML = "Add To Playlist";
                SaveText.setAttribute("onClick", "openAddToPlaylistPopup(" + ids[sortingOrder[listID][i]] + ")");
            }

            var DownloadText = document.createElement("a");
            DownloadText.innerHTML = "Download";
            DownloadText.setAttribute('onclick', "downloadSong()");
            DownloadText.setAttribute('href', "../rfm/" + directories[sortingOrder[listID][i]]);
            DownloadText.setAttribute('download', '');
            
            var DropdownDiv = document.createElement("div");
            DropdownDiv.className = "dropdown-content";
            if(document.getElementById("libraryLink")) {
                DropdownDiv.appendChild(SaveText);
            }
            DropdownDiv.appendChild(DownloadText);

            var moreIcon = document.createElement("i");
            moreIcon.className = "material-icons";
            moreIcon.title = "Add to playlist";
            moreIcon.innerHTML = "more_vert";

            var moreButton = document.createElement("button");
            moreButton.className = "more";
            moreButton.appendChild(moreIcon);

            var moreSpan = document.createElement("span");
            moreSpan.appendChild(moreButton);

            var dropdownDiv = document.createElement("div");
            dropdownDiv.className = "dropdown";
            dropdownDiv.appendChild(DropdownDiv);
            dropdownDiv.appendChild(moreSpan);

            var rightIconsDiv = document.createElement("div");
            rightIconsDiv.className = "rightIcons";
            rightIconsDiv.appendChild(dropdownDiv);

            var timeText = document.createElement("p");
            timeText.className = "time";
            timeText.innerHTML = duration[sortingOrder[listID][i]];

            var releaseDate = dateRelease[sortingOrder[listID][i]];
            var dateNumbers = releaseDate.split("-");
            var today = new Date();

            var newText = document.createElement("p");
            newText.className = "nameText";
            newText.innerHTML = "NEW";

            var tagsDiv = document.createElement("div");
            tagsDiv.className = "tagcont";

            if(mode == 0) {
                if(today.getDate() - 14 > 0) {
                    if(today.getDate() - 14 < dateNumbers[2] && today.getMonth()+1 == dateNumbers[1] && today.getFullYear() == dateNumbers[0]) {
                        tagsDiv.appendChild(newText);
                    }
                }
                else{
                    var extraDays = (today.getDate() - 14) * -1;
                    if(today.getMonth() == dateNumbers[1]) {
                        if(31 - extraDays < dateNumbers[2]) {
                            tagsDiv.appendChild(newText);
                        }
                    }else if(today.getMonth()+1 == dateNumbers[1]) {
                        if(today.getDate() - 14 < dateNumbers[2] && today.getMonth()+1 == dateNumbers[1] && today.getFullYear() == dateNumbers[0]) {
                            tagsDiv.appendChild(newText);
                        }
                    }
                }

                if(genre[sortingOrder[listID][i]] !== "" && genre[sortingOrder[listID][i]] !== "None") {
                    var tagsText1 = document.createElement("p");
                    tagsText1.className = "tags";
                    tagsText1.id = "firstTag";
                    tagsText1.innerHTML = genre[sortingOrder[listID][i]];
                    tagsDiv.appendChild(tagsText1);
                }
                

                if(mood[sortingOrder[listID][i]] !== "" && mood[sortingOrder[listID][i]] !== "None") {
                    var tagsText2 = document.createElement("p");
                    tagsText2.className = "tags";
                    tagsText2.innerHTML = mood[sortingOrder[listID][i]];
                    tagsDiv.appendChild(tagsText2);
                }

                if(instrument[sortingOrder[listID][i]] !== "" && instrument[sortingOrder[listID][i]] !== "None") {
                    var tagsText3 = document.createElement("p");
                    tagsText3.className = "tags";
                    tagsText3.innerHTML = instrument[sortingOrder[listID][i]];
                    tagsDiv.appendChild(tagsText3);
                }

                tagsDiv.appendChild(timeText);
            }

            var artistText = document.createElement("p");
            artistText.className = "composer";
            artistText.innerHTML = artists[sortingOrder[listID][i]];

            var titleText = document.createElement("p");
            titleText.className = "title";
            titleText.innerHTML = titles[sortingOrder[listID][i]];

            var titleArtistDiv = document.createElement("div");
            titleArtistDiv.appendChild(titleText);
            titleArtistDiv.appendChild(artistText);

            var infoDiv = document.createElement("div");
            infoDiv.className = "info";
            infoDiv.appendChild(titleArtistDiv);
            infoDiv.appendChild(tagsDiv);

            var coverImage = document.createElement("img");
            coverImage.className = "cover";
            coverImage.src = covers[sortingOrder[listID][i]];

            var playIcon = document.createElement("img");
            playIcon.className = "playButton";
            playIcon.title = "Play";
            playIcon.src = "resources/bootstrap_icons/play-fill_white.svg";
            playIcon.id = "playButton" + i + "" + listID;

            var playButton = document.createElement("button");
            playButton.className = "playmusic";
            playButton.appendChild(playIcon);

            var detailsDiv = document.createElement("div");
            detailsDiv.className = "details";
            detailsDiv.id = "defaultOpen";
            detailsDiv.appendChild(playButton);
            detailsDiv.appendChild(coverImage);
            detailsDiv.appendChild(infoDiv);

            if(ranked == "true") {
                var ranking = document.createElement("h1");
                ranking.className = "topSongsRanking";
                ranking.innerHTML = (i + 1) + ".";
            }

            var listItem = document.createElement("li");
            listItem.setAttribute('onclick', "play(" + i + ", " + listID + ", " + mode + ")");
            listItem.id = "songItem" + i + "" + listID;
            if(ranked == "true")
                listItem.appendChild(ranking);

            listItem.appendChild(detailsDiv);
            listItem.appendChild(rightIconsDiv);

            list.appendChild(listItem);
        }
    } else if(mode == 1) {
        if(amount > myDirectories.length) {
            amount = myDirectories.length;
            canLoadMore = false;
        }

        if(listNames.includes(listName)) {
            sortingOrder = [];
        }
        else {
            listNames.push(listName);
        }

        if(sortType == 0)
        {
            for(var i = 0; i < amount; i++) {
                newSortingOrder.push(i);
            }
        }
        else if(sortType == 1) {
            for(var s = 0; s < amount; s++) {
                var largestNumberId;
                var largestNumber = 0;
                for(var i = 0; i < myDirectories.length; i++) {
                    if(myListens[i] >= largestNumber && !newSortingOrder.includes(i))
                    {
                        largestNumber = myListens[i];
                        largestNumberId = i;
                    }
                }
                newSortingOrder.push(largestNumberId);
            }
        }
        else if(sortType == 2) {
            i = myDirectories.length - 1;
            for(var s = 0; s < amount; s++) {
                newSortingOrder.push(i - s);
            }
        }
        else if(sortType == 3) {
            for(var s = 0; s < amount; s++) {
                var largestNumberId;
                var largestNumber = 0;
                for(var i = 0; i < myDownloads.length; i++) {
                    if(myDownloads[i] >= largestNumber && !newSortingOrder.includes(i))
                    {
                        largestNumber = myDownloads[i];
                        largestNumberId = i;
                    }
                }
                newSortingOrder.push(largestNumberId);
            }
        }

        sortingOrder.push(newSortingOrder);

        for(var i = 0; i < amount; i++) {
            var DropdownDiv = document.createElement("div");

            DropdownDiv.className = "dropdown-content";

            var path = window.location.pathname;
            var page = path.split("/").pop();

            if(page == "dashboard.php") {
                var DeleteTextForm = document.createElement("form");
                DeleteTextForm.action = "deleteSong.inc.php";
                DeleteTextForm.method = "post";
                DeleteTextForm.id = "deleteForm";
                var DeleteTextID = document.createElement("input");
                DeleteTextID.value = myIds[sortingOrder[listID][i]];
                DeleteTextID.setAttribute("readonly", "true");
                DeleteTextID.setAttribute("required", "true");
                DeleteTextID.style.display = "none";
                DeleteTextID.name = "id";
                DeleteTextID.type = "text";
                var DeleteTextButton = document.createElement("button");
                DeleteTextButton.innerHTML = "Delete";
                DeleteTextButton.name = "submit";
                DeleteTextButton.type = "submit";
                DeleteTextButton.id = "deleteButton";
                DeleteTextForm.appendChild(DeleteTextID);
                DeleteTextForm.appendChild(DeleteTextButton);
                DropdownDiv.appendChild(DeleteTextForm);
            }

            var moreIcon = document.createElement("i");
            moreIcon.className = "material-icons";
            moreIcon.title = "Add to playlist";
            moreIcon.innerHTML = "more_vert";

            var moreButton = document.createElement("button");
            moreButton.className = "more";
            moreButton.appendChild(moreIcon);

            var moreSpan = document.createElement("span");
            moreSpan.appendChild(moreButton);

            var dropdownDiv = document.createElement("div");
            dropdownDiv.className = "dropdown";
            dropdownDiv.appendChild(DropdownDiv);
            dropdownDiv.appendChild(moreSpan);

            var rightIconsDiv = document.createElement("div");
            rightIconsDiv.className = "rightIcons";
            rightIconsDiv.appendChild(dropdownDiv);

            var timeText = document.createElement("p");
            timeText.className = "time";
            timeText.innerHTML = myDuration[sortingOrder[listID][i]];

            var releaseDate = myDateRelease[sortingOrder[listID][i]];
            var dateNumbers = releaseDate.split("-");
            var today = new Date();

            var newText = document.createElement("p");
            newText.className = "nameText";
            newText.innerHTML = "NEW";

            var tagsDiv = document.createElement("div");
            tagsDiv.className = "tagcont";

            if(mode == 0) {
                if(today.getDate() - 14 > 0) {
                    if(today.getDate() - 14 < dateNumbers[2] && today.getMonth()+1 == dateNumbers[1] && today.getFullYear() == dateNumbers[0]) {
                        tagsDiv.appendChild(newText);
                    }
                }
                else{
                    var extraDays = (today.getDate() - 14) * -1;
                    if(today.getMonth() == dateNumbers[1]) {
                        if(31 - extraDays < dateNumbers[2]) {
                            tagsDiv.appendChild(newText);
                        }
                    }else if(today.getMonth()+1 == dateNumbers[1]) {
                        if(today.getDate() - 14 < dateNumbers[2] && today.getMonth()+1 == dateNumbers[1] && today.getFullYear() == dateNumbers[0]) {
                            tagsDiv.appendChild(newText);
                        }
                    }
                }

                if(myGenre[sortingOrder[listID][i]] !== "" && myGenre[sortingOrder[listID][i]] !== "None") {
                    var tagsText1 = document.createElement("p");
                    tagsText1.className = "tags";
                    tagsText1.innerHTML = myGenre[sortingOrder[listID][i]];
                    tagsDiv.appendChild(tagsText1);
                }
                

                if(myMood[sortingOrder[listID][i]] !== "" && myMood[sortingOrder[listID][i]] !== "None") {
                    var tagsText2 = document.createElement("p");
                    tagsText2.className = "tags";
                    tagsText2.innerHTML = myMood[sortingOrder[listID][i]];
                    tagsDiv.appendChild(tagsText2);
                }

                if(myInstrument[sortingOrder[listID][i]] !== "" && myInstrument[sortingOrder[listID][i]] !== "None") {
                    var tagsText3 = document.createElement("p");
                    tagsText3.className = "tags";
                    tagsText3.innerHTML = myInstrument[sortingOrder[listID][i]];
                    tagsDiv.appendChild(tagsText3);
                }

                tagsDiv.appendChild(timeText);
            }

            var artistText = document.createElement("p");
            artistText.className = "composer";
            artistText.innerHTML = myArtists[sortingOrder[listID][i]];

            var titleText = document.createElement("p");
            titleText.className = "title";
            titleText.innerHTML = myTitles[sortingOrder[listID][i]];

            var titleArtistDiv = document.createElement("div");
            titleArtistDiv.appendChild(titleText);
            titleArtistDiv.appendChild(artistText);

            var infoDiv = document.createElement("div");
            infoDiv.className = "info";
            infoDiv.appendChild(titleArtistDiv);
            infoDiv.appendChild(tagsDiv);

            var coverImage = document.createElement("img");
            coverImage.className = "cover";
            coverImage.src = myCovers[sortingOrder[listID][i]];

            var playIcon = document.createElement("img");
            playIcon.className = "playButton";
            playIcon.title = "Play";
            playIcon.src = "resources/bootstrap_icons/play-fill_white.svg";
            playIcon.id = "playButton" + i + "" + listID;

            var playButton = document.createElement("button");
            playButton.className = "playmusic";
            playButton.appendChild(playIcon);

            var detailsDiv = document.createElement("div");
            detailsDiv.className = "details";
            detailsDiv.id = "defaultOpen";
            detailsDiv.appendChild(playButton);
            detailsDiv.appendChild(coverImage);
            detailsDiv.appendChild(infoDiv);

            if(ranked == "true") {
                var ranking = document.createElement("h1");
                ranking.className = "topSongsRanking";
                ranking.innerHTML = (i + 1) + ".";
            }

            var listItem = document.createElement("li");
            listItem.setAttribute('onclick', "play(" + i + ", " + listID + ")");
            listItem.id = "songItem" + i + "" + listID;
            if(ranked == "true")
                listItem.appendChild(ranking);

            listItem.appendChild(detailsDiv);
            listItem.appendChild(rightIconsDiv);

            list.appendChild(listItem);
        }
    }
    
    var section;
    if(document.getElementById(containerName))
    {
        section = document.getElementById(containerName);
        section.appendChild(list);
    }

    if(document.getElementById("loadMoreButton")) {
        document.getElementById("loadMoreButton").remove();
    }

    if(window.location.pathname.toString().includes("explore.php") && canLoadMore) {
        var loadMoreButton = document.createElement("button");
        loadMoreButton.innerHTML = "LOAD MORE SONGS";
        loadMoreButton.id = "loadMoreButton";
        loadMoreButton.classList = "sortbutton waves-effect waves-light";
        loadMoreButton.setAttribute('onclick', "setScrollToBottom(); sortSongs(\"" + containerName + "\", \"" + listName + "\", " + sortType + ", " + (amount + 15) + ", \"" + ranked + "\", " + listID + ", " + mode + ");");
        document.getElementsByClassName("musiclist")[0].appendChild(loadMoreButton);
    }

    if(scrollToBottom) {
        list.scrollTop = (list.scrollHeight + 900) / (timesScrolledToBottom + 1) * timesScrolledToBottom;
        scrollToBottom = false;
    }

    filterSongs();
}

function play(songIdInput, listID, mode) {
    document.getElementById("playPauseButton").style.opacity = "100%";
    document.getElementById("nextButton").style.opacity = "100%";
    document.getElementById("btm-nav_cover").style.opacity = "100%";
    
    if(listID == undefined) {
        listID = currentList;
    }
    if(songIdInput == "current" || ((songIdInput == songID) && (listID == currentList))) {
        if(playButtonPress == 0){

        }
        else if(isPlaying == true) {
            audio.pause();
            document.getElementById('playPauseButton').src = "resources/bootstrap_icons/play-fill_white.svg";
            document.getElementById("songItem" + songID + "" + currentList).classList = "";
            document.getElementById('playButton' + songID + "" + currentList).src = "resources/bootstrap_icons/play-fill_white.svg";
            isPlaying = false;
            if(mode == 0) {
                //document.getElementById('btm-nav_cover').src = "../rfm/" + covers[sortingOrder[listID][songID]];
                //document.getElementById('btm-nav_downloadButton').href = "../rfm/" + directories[sortingOrder[listID][songID]];
                if(document.getElementById('openAddToPlaylistPopupButton')) {
                    //document.getElementById('openAddToPlaylistPopupButton').setAttribute('onclick', "openAddToPlaylistPopup(" + ids[sortingOrder[listID][songID]] + ")");
                }
                //document.getElementById('songTitle').innerHTML = titles[sortingOrder[listID][songID]];
                //document.getElementById('songArtist').innerHTML = artists[sortingOrder[listID][songID]];
            }
            else {
                //document.getElementById('btm-nav_cover').src = "../rfm/" + myCovers[sortingOrder[listID][songID]];
                //document.getElementById('btm-nav_downloadButton').href = "../rfm/" + myDirectories[sortingOrder[listID][songID]];
                if(document.getElementById('openAddToPlaylistPopupButton')) {
                    //document.getElementById('openAddToPlaylistPopupButton').setAttribute('onclick', "openAddToPlaylistPopup(" + myIds[sortingOrder[listID][songID]] + ")");
                }
                //document.getElementById('songTitle').innerHTML = myTitles[sortingOrder[listID][songID]];
                //document.getElementById('songArtist').innerHTML = myArtists[sortingOrder[listID][songID]];
            }
        }
        else if(isPlaying == false) {
            audio.play();
            seekSlider.value = 0;
            if(!audio.paused) {
                requestAnimationFrame(whilePlaying);
            }
            document.getElementById('playPauseButton').src = "resources/bootstrap_icons/pause-fill_white.svg";
            document.getElementById('playButton' + songID + "" + currentList).src = "resources/bootstrap_icons/pause-fill_white.svg";
            document.getElementById("songItem" + songID + "" + currentList).classList = "selectedSong";
            isPlaying = true;
        }
    }
    else {
        audio.pause();
        document.getElementById('playPauseButton').src = "resources/bootstrap_icons/pause-fill_white.svg";
        if(document.getElementById('playButton' + songID + "" + currentList)) {
            document.getElementById('playButton' + songID + "" + currentList).src = "resources/bootstrap_icons/play-fill_white.svg";
            document.getElementById("songItem" + songID + "" + currentList).classList = "";
        }
        if(songID == songIdInput && listID == currentList && isPlaying) {
            isPlaying = false;
        }
        else {
            songID = songIdInput;
            if(mode == 0)
                audio.src = myAudio[sortingOrder[listID][songID]];
            else
                audio.src = myMyAudio[sortingOrder[listID][songID]];

            audio.play();
            audio.currentTime = 0;
            seekSlider.value = 0;
            if(!audio.paused) {
                requestAnimationFrame(whilePlaying);
            }
            playButtonPress += 1;
            document.getElementById('playButton' + songID + "" + listID).src = "resources/bootstrap_icons/pause-fill_white.svg";
            document.getElementById("songItem" + songID + "" + listID).classList = "selectedSong";
            if(mode == 0) {
                document.getElementById('btm-nav_cover').src = "../rfm/" + covers[sortingOrder[listID][songID]];
                document.getElementById('btm-nav_downloadButton').href = "../rfm/" + directories[sortingOrder[listID][songID]];
                if(document.getElementById('openAddToPlaylistPopupButton')) {
                    document.getElementById('openAddToPlaylistPopupButton').setAttribute('onclick', "openAddToPlaylistPopup(" + ids[sortingOrder[listID][songID]] + ")");
                }
                document.getElementById('songTitle').innerHTML = titles[sortingOrder[listID][songID]];
                document.getElementById('songArtist').innerHTML = artists[sortingOrder[listID][songID]];
            }
            else {
                document.getElementById('btm-nav_cover').src = "../rfm/" + myCovers[sortingOrder[listID][songID]];
                document.getElementById('btm-nav_downloadButton').href = "../rfm/" + myDirectories[sortingOrder[listID][songID]];
                document.getElementById('openAddToPlaylistPopupButton').setAttribute('onclick', "openAddToPlaylistPopup(" + myIds[sortingOrder[listID][songID]] + ")");
                document.getElementById('songTitle').innerHTML = myTitles[sortingOrder[listID][songID]];
                document.getElementById('songArtist').innerHTML = myArtists[sortingOrder[listID][songID]];
            }
            isPlaying = true;
        }

        if(mode == 0) {
            var statType = '0';
            $.ajax({
                url: "includes/incrementSongStats.inc.php",
                type: 'post',
                data: 'songID='+ids[sortingOrder[listID][songID]]+'&statType='+statType
            })
        }
        else {
            var statType = '0';
            $.ajax({
                url: "includes/incrementSongStats.inc.php",
                type: 'post',
                data: 'songID='+myIds[sortingOrder[listID][songID]]+'&statType='+statType
            })
        }
    }

    if(listID != currentList && listID != undefined) {
        currentList = listID;
    }
};

function next() {
    if(playButtonPress == 0) {
        
    }
    else {
        audio.pause();
        document.getElementById('playButton' + songID + "" + currentList).src = "resources/bootstrap_icons/play-fill_white.svg";
        document.getElementById("songItem" + songID + "" + currentList).classList = "";
        if(songID + 1 >= sortingOrder[currentList].length) {
            if(currentList + 1 >= sortingOrder.length) {
                currentList = 0;
            }
            else {
                currentList += 1;
            }
            songID = 0;
        }
        else {
            songID += 1;
        }
        document.getElementById("songItem" + songID + "" + currentList).classList = "selectedSong";
        audio.src = myAudio[sortingOrder[currentList][songID]];
        audio.play();
        audio.currentTime = 0;
        seekSlider.value = 0;
        if(!audio.paused) {
            requestAnimationFrame(whilePlaying);
        }
        document.getElementById('playButton' + songID + "" + currentList).src = "resources/bootstrap_icons/pause-fill_white.svg";
        document.getElementById('playPauseButton').src = "resources/bootstrap_icons/pause-fill_white.svg";
        document.getElementById('playButton' + songID + "" + currentList).src = "resources/bootstrap_icons/pause-fill_white.svg";
        document.getElementById('btm-nav_cover').src = "../rfm/" + covers[sortingOrder[currentList][songID]];
        document.getElementById('btm-nav_downloadButton').href = "../rfm/" + directories[sortingOrder[currentList][songID]];
        if(document.getElementById('openAddToPlaylistPopupButton')) {
            document.getElementById('openAddToPlaylistPopupButton').setAttribute('onclick', "openAddToPlaylistPopup(" + ids[sortingOrder[currentList][songID]] + ")");
        }
        document.getElementById('songTitle').innerHTML = titles[sortingOrder[currentList][songID]];
        document.getElementById('songArtist').innerHTML = artists[sortingOrder[currentList][songID]];
        isPlaying = true;
    }
};

audio.onplaying = function() {
  isPlaying = true;
};
audio.onpause = function() {
  isPlaying = false;
};

function downloadSong() {
    var statType = '1';
    $.ajax({
        url: "includes/incrementSongStats.inc.php",
        type: 'post',
        data: 'songID='+ids[sortingOrder[currentList][songID]]+'&statType='+statType
    })
};

const playIconContainer = document.getElementById('play-icon');
const audioPlayerContainer = document.getElementById('audio-player-container');
const seekSlider = document.getElementById('seek-slider');
const volumeSlider = document.getElementById('volume-slider');
const muteIconContainer = document.getElementById('mute-icon');
let muteState = 'unmute';

const durationContainer = document.getElementById('duration');
const currentTimeContainer = document.getElementById('current-time');
//const outputContainer = document.getElementById('volume-output');


muteIconContainer.addEventListener('click', () => {
    if(muteState === 'unmute') {
        audio.muted = true;
        muteState = 'mute';
    } else {
        audio.muted = false;
        muteState = 'unmute';
    }
});

const showRangeProgress = (rangeInput) => {
    if(rangeInput === seekSlider) audioPlayerContainer.style.setProperty('--seek-before-width-duration', rangeInput.value / rangeInput.max * 100 + '%');
    else audioPlayerContainer.style.setProperty('--volume-before-width', rangeInput.value / rangeInput.max * 100 + '%');
}

seekSlider.addEventListener('input', (e) => {
    showRangeProgress(e.target);
});
volumeSlider.addEventListener('input', (e) => {
    showRangeProgress(e.target);
});





/** Implementation of the functionality of the audio player */
let raf = null;

const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
}


//const displayDuration = () => {
//    durationContainer.textContent = calculateTime(audio.duration);
//}

const setSliderMax = () => {
    seekSlider.max = Math.floor(audio.duration);
}

const whilePlaying = () => {
    seekSlider.value = Math.floor(audio.currentTime);
    currentTimeContainer.textContent = calculateTime(seekSlider.value);
    audioPlayerContainer.style.setProperty('--seek-before-width-duration', `${seekSlider.value / seekSlider.max * 100}%`);
    raf = requestAnimationFrame(whilePlaying);
}

if (audio.readyState > 0) {
    //displayDuration();
    setSliderMax();
} else {
    audio.addEventListener('loadedmetadata', () => {
        //displayDuration();
        setSliderMax();
    });
}


seekSlider.addEventListener('input', () => {
    currentTimeContainer.textContent = calculateTime(seekSlider.value);
    if(!audio.paused) {
        cancelAnimationFrame(raf);
    }
});

seekSlider.addEventListener('change', () => {
    audio.currentTime = seekSlider.value;
    if(!audio.paused) {
        requestAnimationFrame(whilePlaying);
    }
});

volumeSlider.addEventListener('input', (e) => {
    const value = e.target.value;

    //outputContainer.textContent = value;
    audio.volume = value / 100;
});

function addSongToPlaylist(songID, playlistID) {
    var newPlaylistString = "";
    for(var i = 0; i < playlistNames.length; i++) {
        newPlaylistString = newPlaylistString.concat(playlistNames[i] + ";");
        newPlaylistString = newPlaylistString.concat(playlistValues[i]);

        if(playlistID == i){

            if(playlistValues[playlistID].includes("."))
            {
                newPlaylistString = newPlaylistString.concat("." + songID + ";");
                playlistValues[i] = playlistValues[i].concat("." + songID);
            }
            else
            {
                if(playlistValues[playlistID] == "") 
                {
                    newPlaylistString = newPlaylistString.concat(songID + ";");
                    playlistValues[i] = playlistValues[i].concat(songID);
                }
                else {
                    newPlaylistString = newPlaylistString.concat("." + songID + ";");
                    playlistValues[i] = playlistValues[i].concat("." + songID);
                }
            }
        }
        else if(i != playlistNames.length - 1) {
            newPlaylistString = newPlaylistString.concat(";");
        }
    }
    
    $.ajax({
        url: "includes/updatePlaylists.inc.php",
        type: 'post',
        data: 'newPlaylistString='+newPlaylistString
    })

    if(playlistID == 0) {
        var statType = '2';
        $.ajax({
            url: "includes/incrementSongStats.inc.php",
            type: 'post',
            data: 'songID='+ids[sortingOrder[currentList][songID]]+'&statType='+statType
        })
    }

    hideAddToPlaylistPopup();
}

function createPlaylist(playlistName) {
    if(playlistName == undefined) {
        var playlistNameInput = document.getElementById("newPlaylistName");
        if(playlistNameInput != null) {
            playlistName = playlistNameInput.value;
        } else {
            playlistName = "New Playlist";
        }
    }

    var newPlaylistString = "";
    for(var i = 0; i < playlistNames.length; i++) {
        newPlaylistString = newPlaylistString.concat(playlistNames[i] + ";");
        newPlaylistString = newPlaylistString.concat(playlistValues[i] + ";");
    }
    newPlaylistString = newPlaylistString.concat(playlistName + ";");
    
    $.ajax({
        url: "includes/updatePlaylists.inc.php",
        type: 'post',
        data: 'newPlaylistString='+newPlaylistString
    })

    setTimeout(function(){
        sessionStorage.setItem("reloading", "true");
        document.location.reload();
    },500);
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
if(btn != null) {
    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

var activeGenreFilters = [];
var activeMoodFilters = [];
var activeInstrumentFilters = [];
var allGenreFilters = ["JAZZ", "ELECTRONIC", "HIP HOP", "COUNTRY", "POP", "ROCK", "CINEMATIC", "CLASSICAL", "FUTURE BASS"];
var allMoodFilters = ["HAPPY", "SAD", "JOYFUL", "NOSTALGIA", "PEACEFUL", "CHILL", "ANGRY", "INTENSE", "SLEEP", "WORKOUT"];
var allInstrumentFilters = ["DRUMS", "GUITAR", "PIANO", "WOODWIND", "STRING", "BRASS", "PRECUSSION", "SYNTH"];

function filter(filterName, category) {
    if(category == "genre") {
        if(!activeGenreFilters.includes(filterName)) {
            activeGenreFilters.push(filterName);
        }
        else {
            for(var i = 0; i < activeGenreFilters.length; i++) {
                if(activeGenreFilters[i] == filterName){
                    delete activeGenreFilters[i];
                }
            }
        }
    }
    else if(category == "mood") {
        if(!activeMoodFilters.includes(filterName)) {
            activeMoodFilters.push(filterName);
        }
        else {
            for(var i = 0; i < activeMoodFilters.length; i++) {
                if(activeMoodFilters[i] == filterName){
                    delete activeMoodFilters[i];
                }
            }
        }
    }
    if(category == "instrument") {
        if(!activeInstrumentFilters.includes(filterName)) {
            activeInstrumentFilters.push(filterName);
        }
        else {
            for(var i = 0; i < activeInstrumentFilters.length; i++) {
                if(activeInstrumentFilters[i] == filterName){
                    delete activeInstrumentFilters[i];
                }
            }
        }
    }

    activeGenreFilters = activeGenreFilters.filter(function(x) {
        return x !== undefined;
    });
    activeMoodFilters = activeMoodFilters.filter(function(x) {
        return x !== undefined;
    });
    activeInstrumentFilters = activeInstrumentFilters.filter(function(x) {
        return x !== undefined;
    });
    filterSongs();
}

function filterSongs() {
    var allSongs = document.getElementsByClassName("musiclist")[0];

    for(var i = 0; i < allSongs.childElementCount; i++) {
        var tags = allSongs.childNodes[i].childNodes[0].childNodes[2].childNodes[1];
        
        var tagsMatched = 0;
        for(var j = 0; j < tags.childElementCount; j++) {
            if(activeGenreFilters.length == 0 || activeGenreFilters.includes(tags.childNodes[1].innerText.toUpperCase())) {
                if(activeInstrumentFilters.length == 0 || activeInstrumentFilters.includes(tags.childNodes[3].innerText.toUpperCase())) {
                    if(activeMoodFilters.length == 0 || activeMoodFilters.includes(tags.childNodes[2].innerText.toUpperCase())) {
                        tagsMatched += 1;
                    }
                }
            }
        }
        if(tagsMatched == 0 && (activeGenreFilters.length != 0 || activeMoodFilters.length != 0 || activeInstrumentFilters.length != 0)) {
            allSongs.childNodes[i].style.display = "none";
        } else {
            allSongs.childNodes[i].style.display = "flex";
        }
    }
}

// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];


// When the user clicks on <span> (x), close the modal
if(span2) {
    span2.onclick = function() {
    hideAddToPlaylistPopup();
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    hideAddToPlaylistPopup();
  }
}



function openAddToPlaylistPopup (songId) {
    var panel = document.getElementById("addToPlaylistPanel");
    panel.innerHTML = "";

    for(var i = 0; i < playlistNames.length; i++) {
        var button = document.createElement("button");
        button.innerText = playlistNames[i];
        button.setAttribute("onClick", "addSongToPlaylist(" + songId + ", " + i + ")");
        button.classList = "playlistbtn";

        var breakElement = document.createElement("br");
        
        panel.appendChild(button);
        panel.appendChild(breakElement);
    }
    var breakElement = document.createElement("br");

    panel.appendChild(breakElement);

    modal2.style.display = "block";
}

function hideAddToPlaylistPopup () {
    modal2.style.display = "none";
}

document.getElementById("playPauseButton").style.opacity = "50%";
document.getElementById("playPauseButton").style.transition = "1s ease-in-out";

document.getElementById("nextButton").style.opacity = "50%";
document.getElementById("nextButton").style.transition = "1s ease-in-out";

document.getElementById("btm-nav_cover").style.opacity = "50%";
document.getElementById("btm-nav_cover").style.transition = "1s ease-in-out";

if(document.getElementsByClassName("playlistbtn")) { 
    if(document.getElementsByClassName("playlistbtn")[0]) {
        document.getElementsByClassName("playlistbtn")[0].click();
    }
}

window.onload = function() {
  
    var file = document.getElementById("thefile");
    var audio = document.getElementById("audio");
    
    file.onchange = function() {
      var files = this.files;
      audio.src = URL.createObjectURL(files[0]);
      audio.load();
      audio.play();
      var context = new AudioContext();
      var src = context.createMediaElementSource(audio);
      var analyser = context.createAnalyser();
  
      var canvas = document.getElementById("canvas");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      var ctx = canvas.getContext("2d");
  
      src.connect(analyser);
      analyser.connect(context.destination);
  
      analyser.fftSize = 256;
  
      var bufferLength =1000;
      console.log(bufferLength);
  
      var dataArray = new Uint8Array(bufferLength);
  
      var WIDTH = canvas.width;
      var HEIGHT = canvas.height;
  
      var barWidth = (WIDTH / bufferLength) * 2.5;
      var barHeight;
      var x = 0;
  
      function renderFrame() {
        requestAnimationFrame(renderFrame);
  
        x = 0;
  
        analyser.getByteFrequencyData(dataArray);
  
        ctx.fillStyle = "#121212";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
  
        for (var i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i];
          
          var r = barHeight + (128 * (i/bufferLength));
          var g = 0 * (i/bufferLength);
          var b = 128;
  
          ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
          ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
  
          x += barWidth + 1;
        }
      }
  
      audio.play();
      renderFrame();
    };
  };

