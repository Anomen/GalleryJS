<div ng-controller='MainCtrl'>
    <ul class="thumbnails">
        <li ng-repeat="file in files | filter:{isFile:true}">
            <a href="#" class="thumbnail" style="height: 170px; width: 300px">
                <img src='{{config.thumbRelativeDir}}{{file.thumbUrl}}' class="img-rounded" style="max-height: 170px; max-width: 300px" />
            </a>
        </li>
    </ul>
</div>
