import logging
from typing import TYPE_CHECKING
from swibots.api.community.models import Channel, Community, Group

if TYPE_CHECKING:
    from swibots.api.community import CommunityClient

log = logging.getLogger(__name__)

BASE_PATH = "/v1/community"


class CommunityController:
    def __init__(self, client: "CommunityClient"):
        self.client = client

    async def get_community(self, community_id: str = '', username: str = ''):
        """Get a community by id or username"""
        if not (community_id or username):
            raise ValueError('community_id or username must be provided.')

        if community_id and username:
            raise ValueError("community_id and username can't be provided together.")
        if username:
            request_url = f"{BASE_PATH}/communityusername?communityId={community_id}"
        else:
            request_url = f"{BASE_PATH}?communityId={community_id}"
        response = await self.client.get(request_url)
        return self.client.build_object(Community, response.data.get("result"))
