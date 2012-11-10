<div ng-controller='MainCtrl'>
    <ul class="nav nav-list">
        <li class="nav-header">Folders</li>
        <li ng-repeat="folder in folders | filter:{isFolder:true}">
            <a href="#/{{routeParams.path}}/{{folder.filename}}">{{folder.filename}}</a>
        </li>
    </ul>
</div>
