from typing import Optional
from swibots.utils.types import JSONDict
from swibots.base.switch_object import SwitchObject
import swibots

class Group(SwitchObject):
    def __init__(
        self,
        app: "swibots.App" = None,
        id: Optional[str] = None,
        name: Optional[str] = None,
        community_id: Optional[str] = None,
        enabled_free: Optional[bool] = None,
        enabled_public: Optional[bool] = None,
        default_group: Optional[bool] = None,
        is_public: Optional[bool] = None,
        created_by: Optional[str] = None,
        icon: Optional[str] = None,
        group_logo_url: Optional[str] = None,
        allowed_content: Optional[str] = None,
        created_at: Optional[str] = None,
        updated_at: Optional[str] = None,
    ):
        super().__init__(app)
        self.id = id
        self.name = name
        self.community_id = community_id
        self.enabled_free = enabled_free
        self.enabled_public = enabled_public
        self.default_group = default_group
        self.is_public = is_public
        self.created_by = created_by
        self.icon = icon
        self.group_logo_url = group_logo_url
        self.allowed_content = allowed_content
        self.created_at = created_at
        self.updated_at = updated_at

    def to_json(self) -> JSONDict:
        return {
            "groupId": self.id,
            "groupName": self.name,
            "communityId": self.community_id,
            "enabledFree": self.enabled_free,
            "enabledPublic": self.enabled_public,
            "defaultGroup": self.default_group,
            "isPublic": self.is_public,
            "createdBy": self.created_by,
            "icon": self.icon,
            "groupLogoUrl": self.group_logo_url,
            "allowedContent": self.allowed_content,
            "createdAt": self.created_at,
            "updatedAt": self.updated_at,
        }

    @classmethod
    def from_json(cls, data: JSONDict) -> "Group":
        if data is not None:
            cls.id = data.get("groupId")
            cls.name = data.get("groupName")
            cls.community_id = data.get("communityId")
            cls.enabled_free = data.get("enabledFree")
            cls.enabled_public = data.get("enabledPublic")
            cls.default_group = data.get("defaultGroup")
            cls.is_public = data.get("isPublic")
            cls.created_by = data.get("createdBy")
            cls.icon = data.get("icon")
            cls.group_logo_url = data.get("groupLogoUrl")
            cls.allowed_content = data.get("allowedContent")
            cls.created_at = data.get("createdAt")
            cls.updated_at = data.get("updatedAt")
        return cls
