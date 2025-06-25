/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 25 Jun 2025
 * Time: 2:17 PM
 * Email: zishan.softdev@gmail.com
 */

export const getSelectedMenu = (location) => {
    const path = location.pathname.split('/');
    return path[1] ?? "dashboard";
}